import "./App.css";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getPosts } from "./actions/posts";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className="App flex flex-col items-center justify-center w-screen">
            <div className="w-[1000px]">
                <nav className="w-full flex justify-center items-center rounded-lg my-4 border-2 border-zinc-300 shadow-md shadow-zinc-400">
                    <h2 className=" text-[#3797d7] text-4xl font-normal">
                        Memories
                    </h2>
                    <img
                        className="h-[60px] p-2"
                        src={memories}
                        alt="memories"
                    />
                </nav>
                <div className="grid grid-col-2 grid-flow-col justify-between ">
                    <div className="bg-red-500">
                        <Posts />
                    </div>
                    <div className="">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
