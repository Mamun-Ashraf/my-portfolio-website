import React from 'react';

const CommonButton = ({ children }) => {
    return (
        <div>
            <button className='btn bg-gradient-to-r from-primary to-secondary text-white px-10 border-0'>{children}</button>
        </div>
    );
};

export default CommonButton;