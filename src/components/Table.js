import React, { useMemo } from 'react';
import { useTable } from 'react-table';

export const Table = (props) => {
    const columns = useMemo(() => props.columns, []);
    const data = useMemo(() => props.data, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups
    } = useTable({
        columns,
        data
    })

    return (
        <div>

        </div>
    )
};