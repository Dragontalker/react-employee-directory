import React from 'react';

export const Filter = ({filter, setFilter}) => {
    return (
        <span>
            <input
                value={filter || ''}
                placeholder={'Search table here...'}
                onChange={e => setFilter(e.target.value)}
            />
        </span>
    )
};