import React, { useState } from "react";

const data = [
    {
        name: "India",
        countryCode: "IND",
        cities: ["Delhi", "Mumbai"],
    },
    {
        name: "Pakistan",
        countryCode: "PAK",
        cities: ["Lahore", "Karachi"],
    },
    {
        name: "Australia",
        countryCode: "AUS",
        cities: ["Sydney", "Melbourne"],
    },
];

function Practice2() {
    const [options, setOptions] = useState(0);
    const [flag, setFlag] = useState(false);

    const handleChange = (e) => {
        setOptions(e.target.value);
        setFlag(true);
    };

    return (
        <div>
            <select name="" id="" value={options} onChange={handleChange}>
                {data.map((country, index) => {
                    return <option value={index}>{country.name}</option>;
                })}
            </select>
            {flag && (
                <select name="" id="">
                    {data[options].cities.map((cities, index) => {
                        return <option>{cities}</option>;
                    })}
                </select>
            )}
        </div>
    );
}

export default Practice2;
