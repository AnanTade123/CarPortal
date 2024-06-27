/* eslint-disable no-unused-vars */
import { apiSlice } from "./apiSlice";

export const brandAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //GET
    getAllBrands: builder.query({
      query: () => ({
        url: `/brands/getAll`,
        method: "GET",
      }),
      providesTags: ["CAR"],
    }),

    //POST
    addCarBrands: builder.mutation({
      query: (carBrand) => ({
        url: `/brands/add`,
        method: "POST",
        transferResponse: console.log(carBrand),
        body: carBrand,
      }),
    }),

    //PATCH
    editBrandData: builder.mutation({
      query: ({ inputField, id }) => ({
        url: `/brands/edit?id=${id}`,
        method: "PATCH",
        transferResponse: console.log(id, inputField),
        body: inputField,
      }),
      providesTags: ["Admin"],
    }),
  }),
});

export const {
  useAddCarBrandsMutation,
  useGetAllBrandsQuery,
  useEditBrandDataMutation,
} = brandAPI;
