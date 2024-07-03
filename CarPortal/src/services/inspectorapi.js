import { apiSlice } from "./apiSlice";

export const inspectorAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    inspectorById: builder.query({
      query: ({userId}) => ({
        url: `ispProfile/getByUserId?userId=${userId}`,
        transferResponse: console.log(userId),
        method: "GET",
      }),
      providesTags:["Inspector"]
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
      invalidatesTags: ["Inspector", "InspectorList"],
    }),

    getInspectionReport : builder.query ({
      query :({id ,docType}) => ({
        url : `/uploadFile/getCarIdType?carId=${id}&docType=${docType}`,
        transerResponse:console.log("APi response",id, docType),
        method : "GET"
      }),
    }),

    inspectorupdate: builder.mutation({
      query: ({id,inspectordata}) => ({
        url: `/ispProfile/update?inspectorProfileId=${id}`,
        transerResponse:console.log("APi response" , inspectordata,id),
        method: 'PATCH',
        body:inspectordata
      }),
      
    }),
  }),
});

export const { useInspectorByIdQuery ,
   useGetallInspectorQuery,
   useGetInspectionReportQuery,
   useInspectionReportMutation,
  useInspectorupdateMutation } = inspectorAPI;
