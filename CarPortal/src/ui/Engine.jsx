import { useState } from 'react';
import { useAddCarImagesMutation } from '../services/dealerAPI';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';
import { useDealerIdByCarQuery } from '../services/carAPI';
// import { decode } from 'jwt-decode'; // Use named import
// import Cookies from 'js-cookie';

export default function Engine() {
  const [openDialog, setOpenDialog] = useState(false); // State to control the dialog display
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
      setOpenDialog(false); // Close the dialog after submission
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true); // Show the dialog
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Close the dialog
  };

  return (
    <div className="flex flex-col justify-center items-center align-middle min-h-screen space-y-4">
      <Button
        type="button"
        className="bg-indigo-500 w-64 h-10 text-white"
        onClick={handleOpenDialog}
      >
        Upload Engine Car Images
      </Button>
      <Dialog open={openDialog} handler={setOpenDialog} size="md">
        <DialogHeader>Upload Engine Car Images</DialogHeader>
        <DialogBody>
          <form
            onSubmit={(e) => {
              setDocument('Engine');
              handleSubmit(e);
            }}
            className="flex flex-col space-y-2"
          >
            {/* {[...Array(4)].map((_, idx) => ( */}
              <div className="flex space-x-2 space-y-2">
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
            {/* ))} */}
          </form>
          <form
            onSubmit={(e) => {
              setDocument('Engine');
              handleSubmit(e);
            }}
            className="flex flex-col space-y-2"
          >
            {/* {[...Array(4)].map((_, idx) => ( */}
              <div className="flex space-x-2 space-y-2">
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
            {/* ))} */}
          </form>
          <form
            onSubmit={(e) => {
              setDocument('Engine');
              handleSubmit(e);
            }}
            className="flex flex-col space-y-2"
          >
            {/* {[...Array(4)].map((_, idx) => ( */}
              <div className="flex space-x-2 space-y-2">
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
            {/* ))} */}
          </form>
          <form
            onSubmit={(e) => {
              setDocument('Engine');
              handleSubmit(e);
            }}
            className="flex flex-col space-y-2"
          >
            {/* {[...Array(4)].map((_, idx) => ( */}
              <div className="flex space-x-2 space-y-2">
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
            {/* ))} */}
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            type="button"
            className="bg-red-500 w-40 h-10 mr-[7rem] text-white"
            onClick={handleCloseDialog}
          >
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
