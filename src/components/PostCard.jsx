import React from 'react'
import "./PostCard.css"
function PostCard() {
    return (
        <div className="post-card">
            <div className="post-card-wrapper">
                <h3 className="post__title">Making a design system from scratch</h3>
                <div className="post-meta">
                    <time>12 Feb 2020</time>
                    <div className="divider"></div>
                    <span className="topic">Design,Pattern</span>
                </div>
                <div className="post_desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </div>
            </div>
        </div>
    )
}

export default PostCard
