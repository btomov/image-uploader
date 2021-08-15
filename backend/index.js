const express        = require('express');
const bodyParser     = require('body-parser');
const app = express();
var multer = require('multer');
var cors = require('cors')
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var fs = require('fs');
var dir = './upload';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}


var path = require('path')

app.listen(process.env.PORT || 2000, ()=>{
    console.log('We are live on ' + process.env.PORT);
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })
  
var upload = multer({storage});

app.post('/upload', upload.single('image'), function(req, res) {
    res.sendStatus(200)
});
