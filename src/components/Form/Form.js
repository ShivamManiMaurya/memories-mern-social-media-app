import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

function Form() {
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    };

    const clear = () => {};

    return (
        <div className="mr-4 shadow-lg shadow-zinc-400 py-2 px-4 rounded-sm border-2 border-zinc-100">
            <form
                action=""
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <h6 className="py-2 font-bold">Creating a Memory</h6>
                <div>
                    <div className="mb-2 border-2 border-zinc-400 rounded-sm">
                        <input
                            className="w-full h-9 pl-2"
                            placeholder="Creator"
                            type="text"
                            name="creator"
                            value={postData.creator}
                            onChange={(e) =>
                                setPostData({
                                    ...postData,
                                    creator: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="mb-2 border-2 border-zinc-400 rounded-sm">
                        <input
                            className="w-full h-9 pl-2"
                            placeholder="Title"
                            type="text"
                            name="title"
                            value={postData.title}
                            onChange={(e) =>
                                setPostData({
                                    ...postData,
                                    title: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="mb-2 border-2 border-zinc-400 rounded-sm">
                        <input
                            className="w-full h-9 pl-2"
                            placeholder="Message"
                            type="text"
                            name="message"
                            value={postData.message}
                            onChange={(e) =>
                                setPostData({
                                    ...postData,
                                    message: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="mb-2 border-2 border-zinc-400 rounded-sm">
                        <input
                            className="w-full h-9 pl-2"
                            placeholder="Tags"
                            type="text"
                            name="tags"
                            value={postData.tags}
                            onChange={(e) =>
                                setPostData({
                                    ...postData,
                                    tags: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }
                    />
                </div>
                <button
                    className="bg-blue-500 w-full py-2 my-2 rounded-sm text-white font-bold shadow-md shadow-zinc-300"
                    type="submit"
                >
                    Submit
                </button>
                <button
                    className=" bg-red-500 w-full py-2 my-2 rounded-sm text-white font-bold shadow-md shadow-zinc-300"
                    type="submit"
                    onClick={clear}
                >
                    Clear
                </button>
            </form>
        </div>
    );
}

export default Form;
