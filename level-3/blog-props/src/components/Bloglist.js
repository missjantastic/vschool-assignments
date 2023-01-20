import React from 'react'
import Blogpost from "./Blogpost"
import data from "../data.js"

export default function Bloglist() {
    const posts = data.map(post => {
        return(
            <Blogpost
                key={post.id}
                {...post}
            />
        )
    })

    return(
        <div className="bloglist">
            {posts}
        </div>
    )
}