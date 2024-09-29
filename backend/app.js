const express = require("express");
const app = express();
const port = process.env.PORT || 1000;
const cors = require('cors');
require("./conn/conn");

const auth = require("./routes/auth");
const list = require("./routes/list");

app.use(express.json());
//app.use(cors({origin5: "*"}));
//app.options('*', cors());
app.use(cors({
    origin: 'https://merntodolist-frontend.onrender.com', // Your frontend domain
    methods: 'GET,POST,PUT,DELETE', // Allowed methods
    //credentials: true // If you need to send cookies or authorization headers
}));

app.get("/", (req, res) =>{
    res.send("Hello");
})

app.use('/api/v1', auth);
app.use('/api/v2', list);

app.listen(1000, () =>{
    console.log("server started");
})
