import React, { useEffect } from 'react'
import { format } from 'timeago.js' 

import { columnsUsers } from '@/helpers/table';
import Table from '../utils/Table';
import { useGetUsersQuery } from '@/redux/features/user/userApi';

type Props = {
  isAdmin?: boolean
}

const Users = ({ isAdmin }: Props) => {
  const { data, isLoading, isSuccess } = useGetUsersQuery({});
  console.log(data)
  const usersArray: any[] = []
  
  if(isSuccess && data){
    if(isAdmin) {
      const admins = data.filter((item: any) => item.role === 'admin');
      admins.forEach((item: any) => {
        usersArray.push({
          _id: item._id,
          name: item.name,
          email: item.email,
          role: item.role,
          courses: item.courses.length,
          createdAt: format(item.createdAt)
        })
      })
    }else{
      data.forEach((item: any) => {
        usersArray.push({
          _id: item._id,
          name: item.name,
          email: item.email,
          role: item.role,
          courses: item.courses.length,
          createdAt: format(item.createdAt)
        })
      })
    }
  }
  
  return (
    <Table data={usersArray} columns={columnsUsers} />
  )
}

export default Users