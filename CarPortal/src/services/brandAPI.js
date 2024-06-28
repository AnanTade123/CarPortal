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
        body: carBrand
    }),
  })


  }),
});

export const {useAddCarBrandsMutation, useGetAllBrandsQuery} = brandAPI
