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
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr></tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};