const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['https://localhost:3000','http://localhost:3000', 'http://localhost:3443','https://localhost:3443', 'http://CEO-NITESH'];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);