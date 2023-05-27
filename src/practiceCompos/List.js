import React, { useState } from "react";

function List({ handleDelete, sport }) {
    const [show, setShow] = useState();

    const handleCheck = (e) => {
        console.log(e.target.checked);
        setShow(e.target.checked);
    };

    return (
        <li className="flex justify-between checkbox gap-4">
            <input type="checkbox" onChange={handleCheck} />
            <div className=" w-20">
                <h4 className="">{sport}</h4>
            </div>
            {show ? (
                <button
                    className={`border px-2 bg-slate-400 ${show}`}
                    onClick={handleDelete}
                >
                    X
                </button>
            ) : null}
        </li>
    );
}

export default List;
