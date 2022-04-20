const Post = require('../models/post');
const fs = require('fs');

module.exports = class API{


    // static async createUser(req,res){
    //     const user = req.body;
    //     const imagename = req.file.filename;
    //     user.image = imagename;
    //     try{
    //         await User.create(user);
    //         res.status(200).json({message:'User created successfully!'});
    //     }catch(err){
    //         res.status(400).json({message:err.message});
    //     }
        
    //  }

    static async fetchAllPost(req,res){
        try{
            const posts = await Post.find();
            res.status(200).json(posts);
        }catch(err){
            res.status(404).json({message:err.message});
        }
    }
    static async fetchPostByID(req,res){
        const id = req.params.id;
        try{
            const post = await Post.findById(id);
            res.status(200).json(post);
        }catch(err){
            res.status(404).json({message:err.message});    
        }
        
    }
    static async fetchAllPostGroup(req,res){
        const group = req.params.group;
        // if(Post.quantity > 0){
            try{
                const posts = await Post.find({group : group});
                res.status(200).json(posts);
            }catch(err){
                res.status(404).json({message:err.message});
            }
        // }
    //     // try{
    //     //     if(post.category > 0){
    //     //         const posts = await Post.find();
    //     //         res.status(200).json(posts);
    //     //     }

    //     // }catch(err){
    //     //     res.status(404).json({message:err.message});
    //     // }
    }
    static async createPost(req,res){
       const post = req.body;
       const imagename = req.file.filename;
       post.image = imagename;
       try{
           await Post.create(post);
           res.status(200).json({message:'Post created successfully!'});
       }catch(err){
           res.status(400).json({message:err.message});
       }
       
    }
    static async updatePost(req,res){
       const id = req.params.id;
       let new_image="";
       if(req.file){
           new_image = req.file.filename;
           try{
               fs.unlinkSync('./uploads/'+req.body.old_image)
           }catch(err){
               console.log(err);
           }
       }else{
           new_image = req.body.old_image;
       }
       const newpost = req.body;
       newpost.image = new_image;

       try{
            await Post.findByIdAndUpdate(id,newpost);
            res.status(200).json({message:'Update post successfully!'});
       }catch(err){
        res.status(404).json({message:'Update post fail !'});
       }
    }
    static async deletePost(req,res){
        const id = req.params.id;
        try{
            const post = await Post.findByIdAndDelete(id);
            if(post.image){
                try{
                    fs.unlinkSync('./uploads/'+post.image);
                }catch(err){
                    console.log(err);
                }  
            }
            res.status(200).json({message:'Delete post successfully!'});   
        }catch(err){
            res.status(404).json({message:err.message});
        }
    }
    static async deleteAllPost(req,res){
        try{
            const post = await Post.deleteMany();
            if(post.image){
                try{
                    fs.unlinkSync('./uploads/'+post.image);
                }catch(err){
                    console.log(err);
                }  
            }
            res.status(200).json({message:'Delete post successfully!'});   
        }catch(err){
            res.status(404).json({message:err.message});
        }
        
    }
}



