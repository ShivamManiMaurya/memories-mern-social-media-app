import "./App.css";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { getPosts } from "./actions/posts";
// import Practice from "./practiceCompos/Practice";
// import Practice2 from "./practiceCompos/Practice2";

function App() {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

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
                        <Posts setCurrentId={setCurrentId} />
                    </div>
                    <div className=" pb-4 flex items-center justify-center md:block">
                        <Form
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                    </div>
                </div>
            </div>
            {/* <Practice /> */}
            {/* <Practice2 /> */}
        </div>
    );
}

export default App;
