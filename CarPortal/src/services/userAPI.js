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
  
       // You probably want providesTags here instead of invalidatesTags for queries
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

    GetUserRequestData: builder.query({
      query: ({page ,size}) => ({
        url: `/userFormController/all?page=${page}&size=${size}`,
        // transferResponse: console.log(userProfileId),
        method: "GET",
      }),
      providesTags:["User"]
  
       // You probably want providesTags here instead of invalidatesTags for queries
    }),

    GetUserRequestDataById: builder.query({
      query: (userFormId) => ({
        url: `userFormController/getById?userFormId=${userFormId}`,
        // transferResponse: console.log(userProfileId),
        method: "GET",
      }),
      providesTags:["User"]
  
       // You probably want providesTags here instead of invalidatesTags for queries
    }),
    
    UserSaleReqFormEdit: builder.mutation({
      query: ({updatedData,userFormId}) => ({
        url: `userFormController/update?userFormId=${userFormId}`,
        transerResponse: console.log("dataaaa",updatedData,userFormId),
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["User"],
    }),

    changePassword : builder.mutation({
      query : ({passChange,userProfileId}) => ({
        url : `/user/changePassword/${userProfileId}`,
        method: "PUT",
        body : passChange,
       
       
      })
      
    }),
    invalidatesTags:["User"],
  }),
  
  
  
});

export const { useGetUserByIdQuery ,
useUserupdateMutation,
useUserSellFormMutation,
useUserSellFormUpdate,


useChangePasswordMutation,
useGetUserRequestDataQuery,
useGetUserRequestDataByIdQuery,
useUserSaleReqFormEditMutation


 } = UserAPI;
