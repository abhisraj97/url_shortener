const express = require("express");
const urlRoute = require('./routes/url');
const dotenv = require('dotenv');
const connect = require('./config/db')
const URL = require('./models/url')




dotenv.config();
connect();
const app = express();

const PORT = 8001;

app.use(express.json());
app.use("/url",urlRoute);

app.get('/:shortId' , async (req,res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },{
            $push:{
                visitHistory : {
                    timestamp : Date.now(),
                }
            },
        }
);
    res.redirect(entry.redirectURL);
});



app.listen(PORT,() => console.log(`Server Started at Port :${PORT}`) );