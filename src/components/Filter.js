import React from 'react';

export const Filter = ({filter, setFilter}) => {
    return (
        <span>
            <input
                value={filter || ''}
            />
        </span>
    )
};