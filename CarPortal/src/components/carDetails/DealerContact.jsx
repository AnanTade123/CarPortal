/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { FaLocationDot } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail, MdPerson } from 'react-icons/md';
import { useGetDealerQuery } from "../../services/dealerAPI";
import CardUi from '../../ui/CardUi';

const DealerContact = ({ dealer_id }) => {
  const { data, isLoading, isError, error } = useGetDealerQuery({ id: dealer_id });

  const {
    dealerDto: {
      mobileNo,
      firstName,
      lastName,
      email,
      city,
      address,
    } = {},
  } = data || {};

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="w-full md:w-full rounded-lg shadow-xl overflow-hidden mt-6">
      <CardUi>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Dealer Contact</h2>
          <div className="space-y-4 mt-4">
            <div className="flex items-start">
              <MdPerson className="mt-1" />
              <div className="flex ml-2 md:ml-4">
                <p className="text-gray-600">Name:</p>
              </div>
              <div className="flex-1 ml-2">
                <p className="text-black font-semibold">{firstName} {lastName}</p>
              </div>
            </div>

            <div className="flex ">
              <div>
              <FaLocationDot className="" />
              </div>
              
              <div className="flex ml-2 md:ml-3">
                <p className="text-gray-600">Address:</p>
              </div>
              <div className="flex ml-2">
                <p className="text-black font-semibold">{address}, {city}</p>
              </div>
            </div>

            <div className="flex items-start">
              <MdEmail className="mt-1" />
              <div className="flex ml-2 md:ml-4">
                <p className="text-gray-600">Email:</p>
              </div>
              <div className="flex ml-2">
                <p className="text-black font-semibold">{email}</p>
              </div>
            </div>

            <div className="flex items-start">
              <IoLogoWhatsapp className="mt-1" />
              <div className="flex ml-2 md:ml-4">
                <p className="text-gray-600">Phone:</p>
              </div>
              <div className="flex ml-2">
                <p className="text-black font-semibold">{mobileNo}</p>
              </div>
            </div>
          </div>
        </div>
      </CardUi>
    </div>
  );
};

export default DealerContact;
