import { apiSlice } from "./apiSlice";

export const UserAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetUserById: builder.query({
      query: ({userId}) => ({
        url: `app/user/getUser/${userId}`,
        transferResponse: console.log(userId),
        method: "GET",
      }),
      providesTags:["User"]
  
       // You probably want providesTags here instead of invalidatesTags for queries
    }),

  }),
});

export const { useGetUserByIdQuery 
  

 } = UserAPI;
