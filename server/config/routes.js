
const RestController = require('../controllers/restaurants');
const ReviewController = require('../controllers/reviews');
let path = require('path');

module.exports = function(app){
    app.get('/api/rests', RestController.all);
    app.post('/api/rests', RestController.create);
    app.get('/api/rests/:id', RestController.findById);
    app.patch('/api/rests/:id', RestController.update);
    app.delete('/api/rests/:id', RestController.destroy); 
    
    app.get('/api/reviews', ReviewController.all);
    app.get('/api/reviews/:id', ReviewController.allofRest);
    app.post('/api/reviews/:restid', ReviewController.create);
    app.patch('/api/reviews/:id', ReviewController.update);
    app.delete('/api/reviews/:id', ReviewController.destroy); 
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/public/dist/public/index.html"))
    });

};  