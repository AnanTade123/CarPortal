// import React from 'react';
import bmw from "/carlogo/bmw.png";
import mercedes from "/carlogo/mercedes.png";
import volkswagen from "/carlogo/volkswagen.png";
import volvo from "/carlogo/volvo.png";
import audi from "/carlogo/audi.png";
import jaguar from "/carlogo/Jaguar.png";
import lamborghini from "/carlogo/lamborghini.png";
import landrover from "/carlogo/landrover.jpg";
import mg1 from "/carlogo/mg1.png";
import porsche from "/carlogo/porsche.png";
import {

  CardBody,
} from "@material-tailwind/react";

const BrandList2 = () => {
  return (
    <>
    <div className="grid grid-cols-3 md:grid-cols-4 text-center md:ml-5 lg:grid-cols-5 lg:gap-16">
     
        {/* First Row */}
        <div style={{  minWidth: "120px" }} className=" hover:scale-110">
          <CardBody >
          <div className="animate-slidein [--slidein-delay:900ms]" >
            <img
              alt="bmw"
              src={bmw}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
              className="w-[5rem] lg:w-[8rem] h-[5rem] lg:h-[8rem] p-[10px] "
            />
        </div>

          </CardBody>
        </div>
        
        <div style={{  minWidth: "120px" }} className="hover:scale-110">
          <CardBody>
          <div className="animate-slidein [--slidein-delay:900ms]" >
            <img
              alt="porsche"
              src={porsche}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
              className="w-[5rem] lg:w-[8rem] h-[5rem] lg:h-[8rem] p-[10px] "
            />
          </div>
          </CardBody>
        </div>
        <div style={{  minWidth: "120px" }} className="hover:scale-110">
          <CardBody>
          <div className="animate-slidein [--slidein-delay:900ms]" >
            <img
              alt="mg1"
              src={mg1}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
              className="w-[5rem] lg:w-[8rem]  h-[5rem] lg:h-[8rem] p-[10px] "
            />
          </div>
          </CardBody>
        </div>
        <div style={{ minWidth: "120px" }} className=" hover:scale-110">
          <CardBody>
          <div className="animate-slidein [--slidein-delay:900ms]" >
            <img
              alt="landrover"
              src={landrover}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
              className="w-[5rem] lg:w-[8rem]  h-[5rem] lg:h-[8rem] p-[10px] "
            />
          </div>
          </CardBody>
        </div>
        <div style={{  minWidth: "120px" }} className=" hover:scale-110">
          <CardBody>
          <div className="animate-slidein [--slidein-delay:900ms]" >
            <img
              alt="mercedes"
              src={mercedes}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
              className="w-[5rem] lg:w-[8rem] h-[5rem] lg:h-[8rem] p-[10px] "
            />
          </div>
          </CardBody>
        </div>
      {/* </div> */}

     
        {/* Second Row */}
        
        <div style={{  minWidth: "120px" }} className="hover:scale-110">
          <CardBody>
          <div className="animate-slidein [--slidein-delay:900ms]" >

            <img
              alt="audi"
              src={audi}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
              className="w-[5rem] lg:w-[8rem] h-[5rem] lg:h-[8rem] p-[10px] "
            />
            </div>
          </CardBody>
        </div>
        <div style={{  minWidth: "120px" }} className="hover:scale-110">
          <CardBody>
          <div className="animate-slidein [--slidein-delay:900ms]" >

            <img
              alt="lamborghini"
              src={lamborghini}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
              className="w-[5rem] lg:w-[8rem] h-[5rem] lg:h-[8rem] p-[10px] "
            />
            </div>
          </CardBody>
        </div>
        <div style={{ minWidth: "120px" }} className="hover:scale-110">
          <CardBody>
          <div className="animate-slidein [--slidein-delay:900ms]" >

            <img
              alt="jaguar"
              src={jaguar}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
              className="w-[5rem] lg:w-[8rem] h-[5rem] lg:h-[8rem] p-[10px] "
            />
            </div>
          </CardBody>
        </div>
        <div style={{ minWidth: "120px" }} className="hover:scale-110">
          <CardBody>
          <div className="animate-slidein [--slidein-delay:900ms]" >

            <img
              alt="volkswagen"
              src={volkswagen}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
              className="w-[5rem] lg:w-[8rem] h-[5rem] lg:h-[8rem] p-[10px] "
            />
            </div>
          </CardBody>
        </div>
        <div style={{  minWidth: "120px" }} className="hover:scale-110">
          <CardBody>
          <div className="animate-slidein [--slidein-delay:900ms]" >

            <img
              alt="volvo"
              src={volvo}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
              className="w-[5rem] lg:w-[8rem] h-[5rem] lg:h-[8rem] p-[10px] "
            />
            </div>
          </CardBody>
        </div>
      {/* </div> */}
      </div>
    </>
  );
};

export default BrandList2;