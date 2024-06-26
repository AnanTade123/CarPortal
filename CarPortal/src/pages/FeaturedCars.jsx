/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CardDefault2 } from "../ui/UploadImageComponents/CardDefault2";

const FeaturedCars = ({ data, error }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (data?.list && Array.isArray(data.list)) {
      setPosts(data.list);
    } else if (error) {
      console.error("Data not Found");
    }
  }, [data, error]);
  return (
    <>
    <div className="text-3xl font-bold p-10 font-[latto]">Featured Cars</div>
        <div className="overflow-auto mx-14">
          <div className="flex gap-4 justify-between w-screen">
            {posts?.map((items, index) => {
              return (
                <div key={index}>
                  <div className="flex">
                    <CardDefault2 data={items} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

    </>
  );
};

export default FeaturedCars;
