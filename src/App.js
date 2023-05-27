import "./App.css";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getPosts } from "./actions/posts";
import Practice from "./practiceCompos/Practice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className="App flex flex-col items-center justify-center w-screen">
            <div className="lg:w-[1000px] lg:mx-0 mx-2">
                <nav className=" bg-white md:w-full flex justify-center items-center rounded-lg my-4 shadow-lg shadow-zinc-700">
                    <h2 className=" text-[#3797d7] text-4xl font-normal">
                        Memories
                    </h2>
                    <img
                        className="h-[60px] p-2"
                        src={memories}
                        alt="memories"
                    />
                </nav>
                <div className=" md:grid grid-col-2 grid-flow-col md:justify-center lg:justify-between ">
                    <div className=" pb-4 lg:col-span-12 col-span-0 flex items-center justify-center lg:block">
                        <Posts />
                    </div>
                    <div className=" pb-4 flex items-center justify-center md:block">
                        <Form />
                    </div>
                </div>
            </div>
            <Practice />
        </div>
    );
}

export default App;
