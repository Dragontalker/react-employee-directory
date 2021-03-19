import React, { useMemo } from 'react';
import { useTable } from 'react-table';

export const Table = (props) => {
    const columns = useMemo(() => props.columns, []);
    const data = useMemo(() => props.data, []);

    const {

    } = useTable({
        columns,
        data
    })

    return (
        <div>

        </div>
    )
};