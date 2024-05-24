import { comments } from "../../../data/comments";

export default function handler(req, res) {
    console.log({req, res}, 'comments/index')
    if(req.method === 'GET') {
        res.status(200).json(comments);
    } else if(req.method === 'POST') {
        console.log('req', req, res)
        const comment = req.body.comment;
        const newComment = {
            id: Date.now(),
            text: comment
        }
        console.log(newComment)
        comments.push(newComment);
        res.status(201).json(newComment);
    } else if(req.method === 'POST') {
        console.log('req', req, res)
        const comment = req.body.comment;
        const newComment = {
            id: Date.now(),
            text: comment
        }
        console.log(newComment)
        comments.push(newComment);
        res.status(201).json(newComment);
    } else if(req.method === 'PATCH') {
        console.log({req , res})
        const comment = req.body.comment;
        const id = req.body.id;
        const newComment = {
            id: id,
            text: comment
        }
        comments.push(newComment);
        res.status(201).json(newComment);
    }
}