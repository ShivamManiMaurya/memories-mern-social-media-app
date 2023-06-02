import React from "react";
import moment from "moment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

function Post({ post, setCurrentId }) {
    const dispatch = useDispatch();

    return (
        <div className="w-fit md:w-60 h-fit bg-white rounded-lg text-left shadow-lg shadow-zinc-700">
            <div className="relative">
                <img
                    className="rounded-t-lg object-cover"
                    src={post.selectedFile}
                    alt=""
                />
                <div className="absolute top-0 text-left p-2 pl-4 text-white ">
                    <h6 className=" text-shadow-border">{post.creator}</h6>
                    <p className=" text-shadow-border text-xs">
                        {moment(post.createdAt).fromNow()}
                    </p>
                </div>
                <div className="absolute top-0 right-0 p-2 pr-2">
                    <button className="" onClick={() => setCurrentId(post._id)}>
                        <MoreHorizIcon
                            sx={{
                                color: "white",
                                fontSize: "40px",
                                height: "24px",
                            }}
                            className="hover:text-zinc-900 hover:bg-slate-200/40 active:bg-slate-50/30 rounded-sm px-2"
                        />
                    </button>
                </div>
            </div>
            <div className="p-2 pl-4">
                <h4 className="py-1 font-bold">{post.title}</h4>

                <div className=" text-xs text-zinc-500">
                    <p>{post.tags.map((tag) => `#${tag} `)}</p>
                </div>
                <div className=" text-sm">
                    <h5>{post.message}</h5>
                </div>
            </div>
            <div className="flex justify-between items-center p-2">
                <button
                    className=" text-blue-600 pl-2 flex items-center gap-1 active:text-blue-800"
                    onClick={() => dispatch(likePost(post._id))}
                >
                    <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
                </button>
                <button
                    className=" text-blue-600 pr-2 flex items-center gap-0 active:text-red-800"
                    onClick={() => dispatch(deletePost(post._id))}
                >
                    <DeleteIcon fontSize="small" /> Delete
                </button>
            </div>
        </div>
    );
}

export default Post;
