import "./App.css";
// import {Container, AppBar, Typography, Grow, Grid} from '@ma'
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

function App() {
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
                <div className="grid grid-col-2 grid-flow-col justify-between bg-zinc-600">
                    <div className="bg-red-500">
                        <Posts />
                    </div>
                    <div className="bg-green-500">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
