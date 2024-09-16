import { apiSlice } from "./apiSlice";


export const UserAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetUserById: builder.query({
      query: (userProfileId) => ({
        url: `/user/getUser/${userProfileId}`,
        // transferResponse: console.log(userProfileId),
        method: "GET",
      }),
      providesTags:["User"]
    }),

    Userupdate: builder.mutation({
      query: ({userProfileId ,userupdate})  => ({
        url: `user/edit/${userProfileId}`,
       
        method: 'PUT',
        body:userupdate
      }),
      invalidatesTags:["User"],
    }),

    UserSellForm : builder.mutation ({
      query : ({formData}) => ({
        url : `/userFormController/add`,
       
        method : "POST",
        body :formData
      }),
      providesTags:["User"]
    }),

   

    UserSellFormUpdate: builder.mutation({
      query: ({userFormId ,userformupdate})  => ({
        url: ` /userFormController/update/${userFormId}`,
       
        method: 'PUT',
        body:userformupdate
      }),
      invalidatesTags:["User"],
    }),


    changePassword : builder.mutation({
      query : ({passChange,userProfileId}) => ({
        url : `/user/changePassword/${userProfileId}`,
        method: "PUT",
        body : passChange,
       }),
       invalidatesTags:["User"],
    }),
    listCarSell: builder.query({
      query: () => ({
        url: `/userFormController/user?userId=1151`,
        // transferResponse: console.log(userProfileId),
        method: "GET",
      }),
      providesTags:["User"]
    }),
  })

});

export const { useGetUserByIdQuery ,
useUserupdateMutation,
useUserSellFormMutation,
useUserSellFormUpdate,
useChangePasswordMutation,
useListCarSellQuery
 } = UserAPI;
