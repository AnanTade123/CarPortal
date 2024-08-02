/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../../services/userAPI";
import { IoChevronBack } from "react-icons/io5";
import { Button } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";


const UserInfo = () => {
  
  
  const token = Cookies.get("token");

  let jwtDecodes;

  if (token) {
    jwtDecodes = jwtDecode(token);
  }
  const userProfileId = token ? jwtDecodes?.userProfileId : null;
  console.log(userProfileId )
  const { data } = useGetUserByIdQuery(userProfileId);

  console.log(data);
if (!data) {
   return <div>
    <p>No Data Found</p>
   </div> 
}
  return (
    <>
      <div className="text-3xl font-bold mt-10 ml-16 mb-[-5rem]">
       User Information
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-lg">
          <div className="w-full md:w-1/2">
            <img
              src="https://www.shutterstock.com/image-photo/smiling-friendly-car-seller-suit-600nw-2105619599.jpg"
              alt="Dealer"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <table className="table w-full ml-2 border-collapse border border-gray-200">
                <tbody>
                  <tr>
                    <th className="px-4 py-2 border border-gray-200">
                      First Name
                    </th>
                    <td className="px-4 py-2 border border-gray-200">
                      {data.firstName}
                    </td>
                  </tr>
                  <tr>
                    <th className="px-4 py-2 border border-gray-200">
                      Last Name
                    </th>
                    <td className="px-4 py-2 border border-gray-200">
                      {data.lastName}
                    </td>
                  </tr>
                  <tr>
                    <th className="px-4 py-2 border border-gray-200">
                      Mobile Number
                    </th>
                    <td className="px-4 py-2 border border-gray-200">
                      {data.mobile_no}
                    </td>
                  </tr>

                  <tr>
                    <th className="px-4 py-2 border border-gray-200">Email</th>
                    <td className="px-4 py-2 border border-gray-200">
                      {data.email}
                    </td>
                  </tr>
                  <tr>
                    <th className="px-4 py-2 border border-gray-200">City</th>
                    <td className="px-4 py-2 border border-gray-200">{data.city}</td>
                  </tr>
                  <tr>
                    <th className="px-4 py-2 border border-gray-200">
                      Address
                    </th>
                    <td className="px-4 py-2 border border-gray-200">
                      {data.address}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center items-center mt-4 md:mt-0">
              <div className="flex items-center mt-5">
                 <Button>Hello</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
