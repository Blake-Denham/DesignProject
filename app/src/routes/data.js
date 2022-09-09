var express = require('express');
var router = express.Router();
var busboy = require('connect-busboy')
const data = require('../controllers/data')


router.
    route('/')
    .post(function (req, res, next) {
        console.log('awe')
        var fstream;
        req.pipe(req.busboy);
        req.busboy.on('file', function (fieldname, file, filename) {
            console.log("Uploading: " + filename);

            //Path where image will be uploaded
            fstream = fs.createWriteStream(__dirname + '/img/' + filename);
            file.pipe(fstream);
            fstream.on('close', function () {    
                console.log("Upload Finished of " + filename);              
                res.redirect('back');           //where to go next
            });
        });
    });

module.exports = router;
