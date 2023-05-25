import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

function Posts() {
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    return !posts.length ? (
        <h1>Loading...</h1>
    ) : (
        <div className=" px-5 grid lg:grid-cols-2 grid-cols-1 gap-y-6">
            {posts.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
}

export default Posts;
