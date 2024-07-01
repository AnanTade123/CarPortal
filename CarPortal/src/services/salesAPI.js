import { apiSlice } from "./apiSlice";

export const salesAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSeller: builder.query({
      query: (pageNo) => ({
        url: `/salesPerson/GetAllInspProfiles?pageNo=0&pageSize=10`,
        transferResponce: console.log(pageNo),
        method: "GET",
      }),
      providesTags: (result) =>
        result ? [{ type: "SALESPERSON", pageNo: result.pageNo }] : [],
    }),
    deleteSeller: builder.mutation({
      query: (salePersonId) => ({
        url: `/salesPerson/deletById/${salePersonId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SALESPERSON"],
    }),
    getSeller: builder.query({
      query: (userId) => ({
        url: `/salesPerson/getByUserId/${userId}`,
        transerResponse: console.log(userId),
      }),
      providesTags: ["SALESPERSON"],
    }),
    getEditSeller: builder.mutation({
      query: (salesPersonId) => ({
        url: `/salesPerson/getByUserId/${salesPersonId}`,
        method: "PATCH",
        transerResponse: console.log(salesPersonId),
        body: salesPersonId.inputField,
      }),
      invalidatesTags: ["SALESPERSON"],
    }),
  }),
});

export const {
  useGetAllSellerQuery,
  useDeleteSellerMutation,
  useGetSellerQuery,
  useGetEditSellerMutation,
} = salesAPI;
