import React from 'react';

function Header() {
    const client = "Programming";

    const title = {
        designer: "Design",
        programming: "Programming",
    }

    const info = {
        name: "Awaab",
        nick: "Abdebagi",
    };

    return (
        <div className='shadow-sm bg-dark p-3 text-white rounded'>
            Hello {`${info.name} ${info.nick}`}
            <h1 className='mt-1'>
                {`${client === "Designer" ? title.designer : title.programming} `} 
                is my life
            </h1>
        </div>
    );
};

export default Header;