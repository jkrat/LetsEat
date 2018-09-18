
var Rest = require('../models/restaurant.js');
var Review = require('../models/review.js');

// Rest.create({
//   name: 'Arbys',
//   cuisine: "meat sandwiches"
// })
    class RestController { 
        constructor() {
        }
        all(req, res) {
            Rest.find({})
            .populate({
              model:"Review",
              path:"reviews",
            }).
            sort({ created_at : -1}).
            exec((e, rests) => {
              if(!rests) return res.json(e);
              return res.json(rests)
            })
        }
        
        // create(req, res) {
        //   let rest = new Rest(req.body);
        //   rest.save((e) => {
        //     if(e)return res.json({error: e, message: "invalid rest input"}); 
        //     return res.json(rest);
        //   });
        // }
        create(req, res) {
          let rest = new Rest(req.body);
          // rest.name = rest.name || " ";  
          console.log("1");
          Rest.findOne({name: req.body.name}, (e, data) => {
            if (data) {
              console.log("2");
              return res.json({ert: "restaurant name already exists"});
            } else {
              console.log("3"); 
              rest.save((e) => {
                if(e) {
                  console.log("4");
                  return res.json({error: e}); 
                } 
                console.log(rest);    
                return res.json(rest);
              });
            }
          });
        }
      

        findById(req, res) {
            Rest.find({_id: req.params.id})
              .populate({
                model:"Review",
                path:"reviews"
              })
              .exec((e, rest) => {
                if(!rest) return res.json(e);
                return res.json(rest)
              })
            } 

        update(req, res) {
          Rest.findById(req.params.id, (e, rest) => {
            if(!rest) return res.json(e);
            if (req.body.name)rest.name = req.body.name;
            if (req.body.cuisine)rest.cuisine = req.body.cuisine;
            rest.save(e=> {
              if(e)return res.json(e);
              return res.json(rest);
            });
          });
        }

        // addComment(req, res) {
        //   Post.findById(req.params.id, (e, post) => {
        //     if(!post) return res.json(e);
        //     post.comments.push(comment)
        //     post.save(e=> {
        //       if(e)return res.json(e);
        //       return res.json(post);
        //     });
        //   });
        // }
              
        destroy(req, res) {
          Rest.findOne({_id: req.params.id}, (e, data) => {

            Rest.deleteOne({_id: req.params.id}, (e) => {
              if(e) return res.json(e);
              else{
                Review.deleteMany({rest: req.params.id}, (e) => {
                  if(e) return res.json(e);
                });
                return res.json(data);
              }
            });
          });   
        }

      }
              
      //   destroy(req, res) {
      //       Rest.deleteOne({_id: req.params.id}, (e) => {
      //         if(e) return res.json(e);
      //       });
      //       Review.deleteMany({rest: req.params.id}, (e) => {
      //         if(e) return res.json(e);
      //       });
      //       return res.json();
      //   }

      // }

    module.exports = new RestController();
