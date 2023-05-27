import React, { useState } from "react";
import List from "./List";

const arr = ["Cricket", "Football", "Basketball"];

function Practice() {
    const [copyArr, setCopyArr] = useState(arr);
    const [checkboxArr, setCheckboxArr] = useState(arr.map(() => false));

    const handleDelete = (index) => {
        const filterdArr = copyArr.filter((ele, i) => {
            return i !== index;
        });
        setCopyArr(filterdArr);
    };

    return (
        <div className="mb-20 text-left bg-white dropdown p-4">
            <ul>
                {copyArr.map((sport, idx) => {
                    return (
                        <List
                            handleDelete={() => handleDelete(idx)}
                            sport={sport}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default Practice;
