import { useState } from 'react';
import { useAddCarImagesMutation } from '../services/dealerAPI';
import { Button } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';
import { useDealerIdByCarQuery } from '../services/carAPI';
// import { decode } from 'jwt-decode'; // Use named import
// import Cookies from 'js-cookie';

export default function Interior() {
  const [showForm, setShowForm] = useState(false); // State to control the form display
  const [images, setImages] = useState([]);
  const [document, setDocument] = useState('');
  const { id } = useParams();
  // const token = Cookies.get('token');
  let jwtDecodes;

  // if (token) {
  //   jwtDecodes = decode(token); // Use named import
  // }

  const UserID = jwtDecodes?.userId;
  const { data } = useDealerIdByCarQuery({ id, pageNo: 2 });

  const lastCarId = data?.list?.length > 0 ? data?.list[data?.list.length - 1].carId : null;

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
      setImages([]);
      setShowForm(false); // Close the form after submission
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    setShowForm(true); // Show the form
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form
  };

  return (
    <div className="flex flex-col justify-center items-center align-middle min-h-screen space-y-4">
      <Button
        type="button"
        className="bg-indigo-500 w-64 h-10 text-white"
        onClick={handleButtonClick}
      >
        Upload Interior Car Images
      </Button>
      {showForm && (
        <form
          onSubmit={(e) => {
            setDocument('Interior');
            handleSubmit(e);
          }}
          className="flex flex-col mt-4 space-y-2"
        >
          {[...Array(4)].map((_, idx) => (
            <div className='flex space-x-2' key={idx}>
              <input
                type="file"
                accept="image/*"
                multiple
                required
                onChange={readImages}
              />
              <Button type="submit" className="bg-indigo-500 w-40 h-10 text-white">
                Upload
              </Button>
            </div>
          ))}
          <Button
            type="button"
            className="bg-red-500 w-40 h-10 text-white mt-4"
            onClick={handleCloseForm}
          >
            Close
          </Button>
        </form>
      )}
    </div>
  );
}
