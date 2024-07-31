/* eslint-disable react/prop-types */
// import { Carousel, IconButton } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export function WinnerSectionImages({ ImageData }) {
    console.log(ImageData);
  
    if (!ImageData || !ImageData.object || ImageData.object.length === 0) {
      return (
        <div className="text-center mt-5">
          <img
            className="h-[14rem] w-[19rem] p-[20px] opacity-50"
            src="..\..\cars\no-image-available.png"
            alt="no image"
          />
        </div>
      );
    }
  
    return (
      <>
        {ImageData.object.map((item) =>
          item.documentType === "coverImage" ? (
            <img
              key={item.documentId}
              src={item.documentLink}
              alt={`Car Image ${item?.documentId}`}
              className="rounded-lg h-[15rem] w-[19rem]"
            />
          ) : null
        )}
        {/* // </Carousel> */}
      </>
    );
  }
  