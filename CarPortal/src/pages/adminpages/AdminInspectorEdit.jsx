/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useInspectorupdateMutation, useInspectorByIdQuery } from "../../services/inspectorapi";
import Inputs from "../../forms/Inputs";
import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const AdminInspectorEdit = () => {
  const { userid, inspectorProfileId } = useParams();
  const userId = userid;
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useInspectorByIdQuery({ userId });
  console.log(data)
  const [inspectorupdate] = useInspectorupdateMutation();

  const [inputField, setInputField] = React.useState({
    address: "",
    city: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: ""
  });

  useEffect(() => {
    if (data && data.response) {
      const { response } = data;
      setInputField({
        inspectorProfileId: response.inspectorProfileId || 0,
        address: response.address || "",
        city: response.city || "",
        firstName: response.firstName || "",
        lastName: response.lastName || "",
        email: response.email || "",
        mobileNo: response.mobileNo || ""
      });
    }
  }, [data]);

  const onChangeFormhandler = (e) => {
    const { name, value } = e.target;
    setInputField((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const inspectordata = {
      inspectorProfileId: 0,
      address: inputField.address,
      city: inputField.city,
      firstName: inputField.firstName,
      lastName: inputField.lastName,
      email: inputField.email,
      mobileNo: inputField.mobileNo
    }
    try {
      const res = await inspectorupdate({ id: inspectorProfileId, inspectordata });
      console.log(res)
      if (res.data.status === 'success') {
        alert("Changes successful");
        navigate('/inspector');  // Ensure that the component that shows the table is at this route
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mx-auto container flex justify-center w-[50%]">
      <form className="w-full border border-gray-500 px-2 py-2 rounded-md mt-2 mb-2">
        <div className="mt-5">
          <p className="text-3xl font-semibold">Edit Inspector Details</p>
        </div>
        <div className="mt-5">
          <Inputs
            label={"First Name"}
            onChange={onChangeFormhandler}
            value={inputField.firstName}
            type={"text"}
            name={"firstName"}
          />
        </div>
        <div className="mt-5">
          <Inputs
            label={"Last Name"}
            onChange={onChangeFormhandler}
            value={inputField.lastName}
            type={"text"}
            name={"lastName"}
          />
        </div>
        <div className="mt-5">
          <Inputs
            label={"Email"}
            onChange={onChangeFormhandler}
            value={inputField.email}
            type={"email"}
            name={"email"}
          />
        </div>
        <div className="mt-5">
          <Inputs
            label={"MobileNo"}
            onChange={onChangeFormhandler}
            value={inputField.mobileNo}
            type={"number"}
            name={"mobileNo"}
          />
        </div>
        <div className="mt-5">
          <Inputs
            label={"Address"}
            onChange={onChangeFormhandler}
            value={inputField.address}
            type={"text"}
            name={"address"}
          />
        </div>
        <div className="mt-5">
          <Inputs
            label={"City"}
            onChange={onChangeFormhandler}
            value={inputField.city}
            type={"text"}
            name={"city"}
          />
        </div>
        <div className="mt-5 ml-2">
          <Button
            onClick={onSubmitHandler}
            type="submit"
            className="py-2 px-2 bg-indigo-600 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminInspectorEdit;
