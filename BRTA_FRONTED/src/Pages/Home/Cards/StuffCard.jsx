import React from 'react';

const StuffCard = ({stuffs}) => {
    return (
        <div className="card w-full bg-base-100 shadow-md mb-3 border border-gray-300 rounded-md">
            <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/rG6j8mj/Avatar-Profile-Vector-PNG-File.png" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{stuffs.title}</h2>
                <p>{stuffs.designation}</p>
            </div>
        </div>
    );
};

export default StuffCard;