const express = require('express');
const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const urlEncoded = bodyParser.json();

const cors = require('cors');
app.use(cors());


mongoose.connect(
    "mongodb+srv://RMD:Admin14344@cluster0-diyzv.mongodb.net/test?retryWrites=true&w=majority",{ 
    useUnifiedTopology: true,useNewUrlParser: true 
    }
);

const Food = mongoose.model('food',{
    name: String,
    price: Number
});

app.use(express.static(__dirname + '/dist/FoodReservation'));
app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.sendFile(__dirname + 'dist/FoodReservation/index.html');
});

// app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));


app.get('/inventory/food', (req, res) => {
    Food.find({},(err, data) => {
    if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.post('/inventory/food', urlEncoded, (req, res) => {
    var food = new Food({
        name: req.body.name,
        price: req.body.price,
    });
    food.save((err, data) => {
        if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.put('/inventory/food/:id', urlEncoded, (req, res) => {
    Food.updateOne({_id:req.params.id},{
        name: req.body.name,
        price: req.body.price
    }, (err, data) => {
        if(err) res.json({msg:'Invalid request'});
            res.json(data);
    });
});

app.delete('/inventory/food/:id', (req, res) => {
    Food.deleteOne({_id:req.params.id},(err,data) => {
    if(err) res.json({msg:'Invalid Request'});
        res.json(data);
    });
});

const PORT = process.env.PORT || 80;

app.listen(PORT,() => {
    console.log(`Serve running at port ${PORT}`);
});