'use client';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../auth/authSlice";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/'
  }),
  endpoints: (builder) => ({
    loadUser: builder.query({
      query: () => { return {url: 'users/me', credentials: "include" as const}  },
      async onQueryStarted(arg, { queryFulfilled, dispatch }){
        try{
          const result = await queryFulfilled;
          console.log(result);
          dispatch(userLoggedIn({user: result.data}))
        }catch(err: any){
          console.log(err);
        } 
      }
    })
  })
})

export const { useLoadUserQuery } = apiSlice;