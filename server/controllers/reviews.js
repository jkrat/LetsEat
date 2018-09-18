var Rest = require('../models/restaurant.js');
var Review = require('../models/review.js');

// Review.create({
//   customer: 'Shiner',
//   content: "white with black eye, 5 years old, likes being outside.",
//   rest: "5b7acd209b1b62b07016ab54",
//   stars: 3
// })
    class ReviewController { 
        constructor() {
        }
        
        all(req, res) {
            Review.find({}).
            populate({
            model:"Rest",
            path:"rest"
            }).
            limit(8).
            sort({ created_at : -1}).
            exec((e, reviews) => {
                if(e)return res.json(e); 
                return res.json(reviews);
            });
        }

        allofRest(req, res) {
            Review.find({rest: req.params.id}).
            sort({ created_at : -1 }).
            exec((e, reviews) => {
                if(e)return res.json(e); 
                return res.json(reviews);
            });
        }
        
        create(req, res) {
            let review = new Review(req.body);
            review.rest = req.params.restid;
            review.save(function(e) {
                if(e)return res.json({error: e,}); 
                Rest.findById(req.params.restid, (e, rest) => {
                    if(!rest) return res.json({error: e});
                    rest.reviews.push(review)
                    rest.save(e=> {
                        if(e)return res.json(e);
                        return res.json(rest.reviews);
                    });
                });
            });
        }
   


        // findById(req, res) {
        //     Comment.find({_id: req.params.id}, function(err, skill) {
        //       if (err) {
        //         //   console.log("Returned error", err);
        //           res.json({message: "Error", error: err});
        //       } else {
        //         //   console.log('successfully retrieved a skill!', skill);
        //           res.json({message: "Success", skill: skill})
        //       }
        //     })
          
        // }

        update(req,res) {
            Review.findById(req.params.id, (e, review) => {
                if(!review) return res.json(e);
                if (req.body.author)review.author = req.body.author;
                if (req.body.content)review.content = req.body.content;
                review.save(e=> {
                  if(e)return res.json(e);
                  return res.json(review);
                });
            });
        }

        destroy(req, res) {
            Review.remove({_id: req.params.id}, (e) => {
                if(e)return res.json(e); 
                return res.json({message: "success"});
            });
        }

    }

    module.exports = new ReviewController();
