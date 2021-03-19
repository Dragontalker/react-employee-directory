import React, { useMemo } from 'react';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import { Filter } from './Filter';
import './Table.css';

export const Table = (props) => {
    const columns = useMemo(() => props.columns, []);
    const data = useMemo(() => props.data, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({
        columns,
        data
    }, useGlobalFilter)

    const { globalFilter } = state;

    return (
        <div>
            <Filter filter={globalFilter} setFilter={setGlobalFilter}/>
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
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};