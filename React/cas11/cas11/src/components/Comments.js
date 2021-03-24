import React, {useEffect} from 'react'; // vo ovoj slucaj go importirame useEffect bidejki ke ni treba da napravime http povik
import {useSelector, useDispatch} from 'react-redux';
import {fetchCommentsRequests} from './../actions/CommentsActions';
import {Link} from 'react-router-dom';

export function Comments() {
    const comments = useSelector(state=>state.CommentsReducer.comments);
    // const error = useSelector(state=>state.CommentsReducer.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCommentsRequests())
    }, [dispatch])
    
    return(
        <div id="comments">
            <h2>Comments</h2>
            {/* <button>Get comments</button> */}
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.length > 0 && comments.map((comment) => {
                        return(
                        <tr key={comment.id}>
                            <td>
                                {comment.name}
                            </td>
                            <td>
                                {comment.email}
                            </td>
                            <td>
                                {comment.body}
                            </td>
                            <td>
                               <Link to={`/comment/${comment.id}`}>View Details</Link>
                            </td>
                        </tr>
                    )})}
                </tbody>

            </table>
        </div>
    )
}