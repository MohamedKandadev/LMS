'use client';
import { apiSlice } from "../api/api";

type RegistrationResponse = {
  message: string;
}
type RegistrationData = {}

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: ({avatar}) => ({
        url: 'users/avatar',
        method: 'PUT',
        body: {avatar},
        credentials: "include" as const 
      })
    }),
    deleteProfile: builder.mutation({
      query: () => ({
        url: 'users/avatar',
        method: 'DELETE',
        credentials: "include" as const 
      })
    }),
    updateInfo: builder.mutation({
      query: ({name}) => ({
        url: 'users/update-info-user',
        method: 'PUT',
        body: {name},
        credentials: "include" as const 
      })
    }),
    updatePassword: builder.mutation({
      query: ({ currentPassword, newPassword}) => ({
        url: 'users/update-password',
        method: 'PUT',
        body: { currentPassword: currentPassword, newPassword},
        credentials: "include" as const 
      })
    }),
    getUsers: builder.query({
      query: () => ({url: 'users', method: 'GET',credentials: "include" as const}),
    })
  })
})

export const { 
  useUpdateProfileMutation, 
  useDeleteProfileMutation, 
  useUpdateInfoMutation, 
  useUpdatePasswordMutation, 
  useGetUsersQuery 
} = userApi;