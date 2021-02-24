import React from 'react';
import PropTypes from 'prop-types';

export function Posts(props) {
    console.log(props);
    return(
        <div id="posts">
            {
                props.postList.length > 0 ? 
                <ul>
                    {
                        props.postList.map((post) => {
                            return(
                                <li key={post.id}>
                                    <span><b>Title:</b> {post.title}</span>
                                    <br/>
                                    <span><b>Body:</b> {post.body}</span>
                                    <hr/>
                                </li>
                            )
                        })
                    }
                </ul>
                : <h2>Loading posts...</h2>
            }
        </div>
    )
}
Posts.propTypes = {
    postList: PropTypes.array.isRequired
}