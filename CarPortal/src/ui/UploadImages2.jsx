
import Exterior from './Exterior';
import Interior from './Interior';
import Tyre from './Tyre';
import Features from './Features';
import Engine from './Engine';

export default function UploadImages() {

  return (
    
    // <div className="flex flex-col justify-center items-center align-middle min-h-screen">
    <>
      {/* <form
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
      </form> */}
      <Exterior/>
      <Interior/>
      <Tyre/>
      <Features/>
      <Engine/>
      {/* <form
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
      </form> */}

      {/* <form
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
      </form> */}

      {/* <form
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
      </form> */}

      {/* <form
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
      </form> */}
      </>
    // </div>
   
  );
}