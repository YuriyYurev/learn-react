import React from "react"

export default function PostItem({ post, number }) {
    return (
        <div className="post-item" id={post.id}>
            <div className="post-item__content">
                <h3 className="post-item__content-title">{number} {post.title}</h3>
                <div className="post-item__content-description">{post.description}</div>
            </div>
            <button type="button" className="post-item__button">Удалить пост</button>
        </div>
    )
}