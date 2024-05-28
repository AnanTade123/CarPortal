import { useState } from 'react';
import { useAddCarImagesMutation } from '../services/dealerAPI';
import { Button } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';
import { useDealerIdByCarQuery } from '../services/carAPI';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Note: The import is corrected
import Cookies from 'js-cookie';

export default function UploadImages() {
  const [images, setImages] = useState([]);
  const [document, setDocument] = useState('');
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const { id } = useParams();
  const token = Cookies.get('token');
  let jwtDecodes;

  if (token) {
    jwtDecodes = jwtDecode(token);
  }

  const UserID = jwtDecodes?.userId;
  const { data } = useDealerIdByCarQuery({ id, pageNo: 2 });

  const lastCarId =
    data?.list?.length > 0 ? data?.list[data?.list.length - 1].carId : null;

  const [addCarImages] = useAddCarImagesMutation();

  const readImages = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!lastCarId || !images.length) {
      console.error('lastCarId or images is not defined');
      return;
    }

    const formData = new FormData();
    for (const image of images) {
      formData.append('image', image);
    }

    try {
      const response = await addCarImages({
        formData,
        document,
        lastCarId,
        UserID,
      }).unwrap();
      console.log(response);
      setImages("")
    } catch (error) {
      console.error(error);
    }
    // navigate(-2);
  };

  return (
    <div className="flex flex-col justify-center items-center align-middle min-h-screen">
      <form
        onSubmit={(e) => {
          setDocument('Exterior');
          handleSubmit(e);
        }}
        className="flex flex-col"
      >
        <div className="flex mb-6">
          <input
            type="file"
            accept="image/*"
            multiple
            required
            onChange={readImages}
          />
          <Button type="submit" className="bg-indigo-500 w-64 h-10 text-white">
            Upload Exterior Car Images
          </Button>
        </div>
      </form>

      <form
        onSubmit={(e) => {
          setDocument('Interior');
          handleSubmit(e);
        }}
        className="flex flex-col"
      >
        <div className="flex mb-6">
          <input
            type="file"
            accept="image/*"
            multiple
            required
            onChange={readImages}
          />
          <Button type="submit" className="bg-indigo-500 w-64 h-10 text-white">
            Upload Interior Car Images
          </Button>
        </div>
      </form>

      <form
        onSubmit={(e) => {
          setDocument('Tyre');
          handleSubmit(e);
        }}
        className="flex flex-col"
      >
        <div className="flex mb-6">
          <input
            type="file"
            accept="image/*"
            multiple
            required
            onChange={readImages}
          />
          <Button type="submit" className="bg-indigo-500 w-64 h-10 text-white">
            Upload Car Tyre Images
          </Button>
        </div>
      </form>

      <form
        onSubmit={(e) => {
          setDocument('Features');
          handleSubmit(e);
        }}
        className="flex flex-col"
      >
        <div className="flex mb-6">
          <input
            type="file"
            accept="image/*"
            multiple
            required
            onChange={readImages}
          />
          <Button type="submit" className="bg-indigo-500 w-64 h-10 text-white">
            Upload Car Features Images
          </Button>
        </div>
      </form>

      <form
        onSubmit={(e) => {
          setDocument('Engine');
          handleSubmit(e);
        }}
        className="flex flex-col"
      >
        <div className="flex mb-6">
          <input
            type="file"
            accept="image/*"
            multiple
            required
            onChange={readImages}
          />
          <Button type="submit" className="bg-indigo-500 w-64 h-10 text-white">
            Upload Car Engine Images
          </Button>
        </div>
      </form>
    </div>
  );
}
