import React, { useState } from "react";
import { bathroomFeatures, bedroomLaundryFeatures } from "../utils";
import x_closer from "../images/icons/x-closer.svg";

const ModalHome = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="w-[240px] h-[61px] bg-white active:bg-[#F9F9F9] w-[240px] h-[61px] bg-white border border-[#272728] hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Show all 36 amenities
      </button>
      {showModal ? (
        <>
          <div
            onClick={() => setShowModal(false)}
            className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#00000085]"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="w-[780px] h-[735px] border-0 rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-col items-start justify-between p-6 gap-7">
                  <button
                    className="bg-transparent border-0 float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <img src={x_closer} alt="close modal" />
                  </button>
                  <h3 className="text-[24px] font-black">
                    What Redpoint Offers
                  </h3>
                  <p className="font-black">Bathroom</p>
                  <div className="flex flex-col gap-4">
                    {bathroomFeatures.map((feature) => {
                      return (
                        <div
                          key={feature.category}
                          className="w-[716px] h-10 flex flex-row justify-between border-b border-[#DDDDDD]"
                        >
                          <div className="flex flex-row justify-between gap-4 items-start">
                            <div className="w-6 h-6">
                              <img src={feature.icon} alt={feature.category} />
                            </div>
                            <div>
                              {feature.category}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="font-black">Bedroom and laundry</p>
                  <div className="flex flex-col gap-4">
                    {bedroomLaundryFeatures.map((feature) => {
                      return (
                        <div
                          key={feature.category}
                          className="w-[716px] h-10 flex flex-row justify-between border-b border-[#DDDDDD]"
                        >
                          <div className="flex flex-row justify-between gap-4 items-start">
                            <div className="w-6 h-6">
                              <img src={feature.icon} alt={feature.category} />
                            </div>
                            <div>
                              {feature.category}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalHome;
