import { apiSlice } from "./apiSlice";

export const inspectorAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    inspectorById: builder.query({
      query: ({userId}) => ({
        url: `ispProfile/getByUserId?userId=${userId}`,
        transferResponse: console.log(userId),
        method: "GET",
      }),
      providesTags:["Inspector"],
  
    }),

    getallInspector: builder.query({
      query: ({ pageNo, pageSize }) => ({
        url: `/ispProfile/GetAllInspProfiles?pageNo=${pageNo}&pageSize=${pageSize}`,
        method: "GET",
      }),

       providesTags:["Inspector"],
    }),

    inspectionReport : builder.mutation ({
      query : ({inspectionData,formDataToSend}) => ({
        url : `/uploadFileBidCar/add?documentType=${inspectionData.documentType}&beadingCarId=${inspectionData.beadingCarId}&doc=${inspectionData.doc}&doctype=${inspectionData.doctype}&subtype=${inspectionData.subtype}&comment=${inspectionData.comment}`,
        transerResponse:console.log(inspectionData,formDataToSend),
        method : "POST",
        body :formDataToSend
      }),
    }),

    getInspectionReport : builder.query ({
      query :({id ,docType}) => ({
        url : `/uploadFile/getCarIdType?beadingCarId=${id}&docType=${docType}`,
        transerResponse:console.log("APi response",id, docType),
        method : "GET"
      }),
      invalidatesTags:["Inspector"],
    }),

    inspectorupdate: builder.mutation({
      query: ({id,inspectordata}) => ({
        url: `/ispProfile/update?inspectorProfileId=${id}`,
        transerResponse:console.log("APi response" , inspectordata,id),
        method: 'PATCH',
        body:inspectordata
      }),
      invalidatesTags:["Inspector"],
      
    }),
    finalInspectionReport : builder.mutation({
      query : ({inspectionData}) => ({
        url:`/inspectionReport/add`,
        method : "POST",
        transerResponse:console.log("APi response",inspectionData),
       body : inspectionData 
      })
    }),
    invalidatesTags:["Inspector"],
  }),
});

export const { useInspectorByIdQuery ,
  useGetallInspectorQuery,
  useGetInspectionReportQuery,
  useInspectionReportMutation,
  useInspectorupdateMutation ,
  useFinalInspectionReportMutation } = inspectorAPI;
