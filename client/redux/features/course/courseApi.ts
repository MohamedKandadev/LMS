// 'use client';
import build from "next/dist/build";
import { apiSlice } from "../api/api";

const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (course) => ({
        url: 'courses/',
        method: 'POST',
        body: course,
        credentials: "include" as const 
      })
    }),
    getCourses: builder.query({
      query: (filter) => ({url: `courses?page=${filter.page}&sort=${filter.sort}&search=${filter.search}`, method: 'GET',credentials: "include" as const}),
    }),
    getCourse: builder.query({
      query: (id) => ({url: `courses/${id}`, method: 'GET',credentials: "include" as const}),
    })
  })
})

export const { useCreateCourseMutation, useGetCoursesQuery, useGetCourseQuery} = courseApi;