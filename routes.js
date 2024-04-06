import express from 'express';
import {  verifyUserHandler } from './src/controller/userControllers.js';

const router = express.Router();
//Signup and login
router.post('/verifyUser', verifyUserHandler)
// router.post('/createUser',createUserHandler);
// router.post('/loginUser',loginUserHandler);
// //Post CRUD operations

// router.post('/createPost',createPostHandler);
// router.get('/showPost',showPostHandler);
// router.put('/updateUser/:id',updatePostHandler);
// router.delete('/deleteUser/:id',deletePostHandler);
// // router.post('/deletePost',deletePostHandler);

// //Comment CRUD operation
// router.post('/createComment',createCommentHandler);
// router.get('/showComment',showCommentHandler);
// router.put('/updateComment/:id',updateCommentHandler);
// router.delete('/deleteComment/:id',deleteCommentHandler);

// // upvote and downvote for post and comment 
// router.put('/upvotepost/:id',upVotePostHandler);
// router.put('/downvotepost/:id',downVotePostHandler);

// router.put('/upvotecomment/:id',upVoteCommentHandler);
// router.put('/downvotecomment/:id',downVoteCommentHandler);



export {router as routes};