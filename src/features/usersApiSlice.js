import {apiSlice} from './apiSlice';
const USERS_URL = 'http://localhost:5000/api/users';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login: builder.mutation({
            query:(data)=> ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data 
          }) ,
        }),
        register: builder.mutation({
            query:(data)=> ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data 
          }) ,
        }),
        getusers: builder.mutation({
            query:(data)=> ({
                url: `${USERS_URL}`,
                method: 'GET',
                body: data 
          }) ,
        }),
        logout: builder.mutation({
            query: ()=>({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        })
    }),
});

export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useGetusersMutation} = userApiSlice;