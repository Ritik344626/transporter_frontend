import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.152.59:4001/api/v1/' }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => 'users',
    }),
    Login: builder.mutation({
      query: newUser => ({
        url: 'auth/login',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useLoginMutation } = apiSlice;
