import React, { useMemo } from 'react';
import { useTable } from 'react-table';

export const Table = (props) => {
    const columns = useMemo(() => props.columns, []);
    const data = useMemo(() => props.data, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    })

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}></tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>

                </tbody>
            </table>
        </div>
    )
};