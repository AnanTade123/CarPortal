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

    inspectionReport : builder.mutation ({
      query : ({inspectionData}) => ({
        url : `/uploadFileBidCar/add?documentType=${inspectionData.documentType}&carId=10&doc=ABC&doctype=ABC&subtype=PQR&comment=Yes`,
        transerResponse:console.log(inspectionData),
        method : "POST",
        body :inspectionData
      }),
    }),

    getInspectionReport : builder.query ({
      query :({id ,docType}) => ({
        url : `/uploadFile/getCarIdType?carId=${id}&docType=${docType}`,
        transerResponse:console.log("APi response",id, docType),
        method : "GET"
      }),
    }),
  }),
});

export const { useInspectorByIdQuery ,
   useGetallInspectorQuery,
   useGetInspectionReportQuery,
   useInspectionReportMutation } = inspectorAPI;
