import React from 'react';

function Text() {
    const client = "Programming";
    let text = `Programming and design are skills for creating software applications with code, structure, logic, and appearance using various tools and methods`

    if (client === "Programming") {
        text = text.split(" ").map((ele) => ele === client ? ele.toLocaleUpperCase() : ele).join(" ");
    } else if (client === "design") {
        text = text.split(" ").map((ele) => ele === client ? ele.toLocaleUpperCase() : ele).join(" ");
    }

    return (
        <p className='mt-3 px-2'>{text}</p>
    );
};

export default Text;