import { useState } from "react";

export default function CommentPage() {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    }

    const submitComment = async () => {
        const response = await fetch('api/comments', {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data)
    } 

    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log('deleted data', data);
        fetchComments();
    }

    
  const updateComment = async (commentId, updatedContent) => {
    console.log('commentId', commentId);

    try {
      const response = await fetch(`/api/comments/${commentId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: updatedContent, // Assuming you're updating the content of the comment
        }),
      });

      console.log('response', response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('updated data', data, response);

      fetchComments();
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };


    return (<>
    <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
    <button onClick={submitComment}>Submit Comment</button>
    <button onClick={fetchComments}>Load Comments</button>
    {comments.map(comment => {
        return (<div key={comment.id}>{comment.id} {comment.text}
        <button onClick={() => deleteComment(comment.id)}>Delete</button>
        <button onClink={() => {
            console.log('hit');
            updateComment(comment.id, comment.text)
        }}>Update</button>
        </div>)
    })}
    </>)
}