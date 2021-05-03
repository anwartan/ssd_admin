import React from 'react';
import { useTable } from 'react-table';
import { Button } from '../components';

export default function EditOperator() {
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
        col3: 'On off',
        col4: <Button>Edit</Button>,
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'On off',

        col4: <Button>Edit</Button>,

      },
      {
        col1: 'whatever',
        col2: '',
        col3: 'On off',

        col4:
  <>
    <Button>Edit</Button>
    <Button>Hapus</Button>
  </>,

      },
    ],
    [],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'No. ID Pegawai',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Nama Pegawai Operator',
        accessor: 'col2',
      },
      {
        Header: 'Status',
        accessor: 'col3',
      },
      {
        Header: 'Action',
        accessor: 'col4',
      },
    ],
    [],
  );
  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <div>
      <table className="table table-striped" {...getTableProps()}>
        <thead>
          {// Loop over the header rows
       headerGroups.map((headerGroup) => (
         // Apply the header row props
         <tr {...headerGroup.getHeaderGroupProps()}>
           {// Loop over the headers in each row
           headerGroup.headers.map((column) => (
             // Apply the header cell props
             <th {...column.getHeaderProps()}>
               {// Render the header
               column.render('Header')
}
             </th>
           ))
}
         </tr>
       ))
}
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {// Loop over the table rows
       rows.map((row) => {
         // Prepare the row for display
         prepareRow(row);
         return (
           // Apply the row props
           <tr {...row.getRowProps()}>
             {// Loop over the rows cells
             row.cells.map((cell) => (
               <td {...cell.getCellProps()}>
                 {// Render the cell contents
                   cell.render('Cell')
}
               </td>
             ))
}
           </tr>
         );
       })
}
        </tbody>
      </table>
    </div>
  );
}
