'use client';

import React, { useState } from 'react'
import {
  ColumnDef,
  flexRender,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel
} from "@tanstack/react-table"
import Button from './Button';

type Props = {
  data: any,
  columns: any
}

const Table = ({ data, columns }: Props) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState({});
  console.log(data)

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
  })

  return (
    <>
      <div className="px-[40px] py-[20px] relative overflow-x-auto">
        <table className='w-full font-poppins overflow-hidden rounded-2xl table-auto '>
          <thead className='bg-seconde-gray h-[60px] text-primary dark:bg-primary-dark'>
            {table.getHeaderGroups().map((item) => (
              <tr key={item.id}>
                {
                  item.headers.map((headItem) => (
                    <th key={headItem.id} className='font-[500]'>
                      {
                        headItem.isPlaceholder ? null : flexRender(
                          headItem.column.columnDef.header,
                          headItem.getContext()
                        )
                      }
                    </th>
                  ))
                }
              </tr>
            ))}
          </thead>
          <tbody className='text-center'>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className='border-b-[1px]'
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className='py-4'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="h-24 text-center">
                No results.
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 px-[40px]">
        <Button
          content='Previous'
          variante="primary"
          // size="sm"
          onClick={() => table.previousPage()}
          // disabled={!table.getCanPreviousPage()}
        />
        <Button
          content='Next'
          variante="primary"
          // size="sm"
          onClick={() => table.nextPage()}
          // disabled={!table.getCanPreviousPage()}
        />
      </div>
    </>
  )
}

export default Table