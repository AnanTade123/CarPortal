import { apiSlice } from "./apiSlice";

export const inspectorAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    inspectorById: builder.query({
      query: ({userId}) => ({
        url: `ispProfile/getByUserId?userId=${userId}`,
        transferResponse: console.log(userId),
        method: "GET",
      }),
       // You probably want providesTags here instead of invalidatesTags for queries
    }),

    getallInspector: builder.query({
      query: ({ pageNo, pageSize }) => ({
        url: `/ispProfile/GetAllInspProfiles?pageNo=${pageNo}&pageSize=${pageSize}`,
        method: "GET",
      }),
       // Same here
    }),
  }),
});

export const { useInspectorByIdQuery , useGetallInspectorQuery} = inspectorAPI;
