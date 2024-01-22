'use client'

import {
  ColumnDef,
  flexRender,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel
} from "@tanstack/react-table";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

export type Courses = {
  _id: string
  Title: string
  Ratings: "pending" | "processing" | "success" | "failed"
  Purchased: string
  CreatedAt: string
  actions: any
}
export type Users = {
  _id: string
  Name: string
  Email: string
  Role: string
  Courses: string
  actions: any
  CreatedAt: string
}

export const columnsUsers: ColumnDef<Users>[] = [
  {
    accessorKey: "_id",
    header: "#",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='w-full flex justify-center items-center'
        >
          Name
          <HiOutlineArrowsUpDown className="ml-2 h-4 w-4" />
        </button>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='w-full flex justify-center items-center'
        >
          Email
          <HiOutlineArrowsUpDown className="ml-2 h-4 w-4" />
        </button>
      )
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='w-full flex justify-center items-center'
        >
          Role
          <HiOutlineArrowsUpDown className="ml-2 h-4 w-4" />
        </button>
      )
    },
  },
  {
    accessorKey: "courses",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='w-full flex justify-center items-center'
        >
          Purchased Courses
          <HiOutlineArrowsUpDown className="ml-2 h-4 w-4" />
        </button>
      )
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='w-full flex justify-center items-center'
        >
          Joined At
          <HiOutlineArrowsUpDown className="ml-2 h-4 w-4" />
        </button>
      )
    },
  },
  {
    id: 'actions',
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const Payment = row.original;
      return(
        <>
          <button className='text-[23px] mr-3' onClick={() => console.log('edit', Payment._id)}><TiEdit /></button>
          <button className='text-[23px]' onClick={() => console.log('delete', Payment._id)}><MdDelete /></button>
        </>
      )
    }
  }
]
export const columnsCourses: ColumnDef<Courses>[] = [
  {
    accessorKey: "_id",
    header: "#",
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='w-full flex justify-center items-center'
        >
          Title
          <HiOutlineArrowsUpDown className="ml-2 h-4 w-4" />
        </button>
      )
    },
  },
  {
    accessorKey: "ratings",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='w-full flex justify-center items-center'
        >
          Ratings
          <HiOutlineArrowsUpDown className="ml-2 h-4 w-4" />
        </button>
      )
    },
  },
  {
    accessorKey: "purchased",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='w-full flex justify-center items-center'
        >
          Purchased
          <HiOutlineArrowsUpDown className="ml-2 h-4 w-4" />
        </button>
      )
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='w-full flex justify-center items-center'
        >
          Created At
          <HiOutlineArrowsUpDown className="ml-2 h-4 w-4" />
        </button>
      )
    },
  },
  {
    id: 'actions',
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const Payment = row.original;
      return(
        <>
          <button className='text-[23px] mr-3' onClick={() => console.log('edit', Payment._id)}><TiEdit /></button>
          <button className='text-[23px]' onClick={() => console.log('delete', Payment._id)}><MdDelete /></button>
        </>
      )
    }
  }
]