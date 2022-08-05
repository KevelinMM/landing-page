import React, { useState } from "react";
import logo from "../images/1s.png";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-black bg-opacity-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-12 md:p-20 ">
        {/* Section header */}
        <div className="text-center pb-12 md:pb-16">
          <div className="w-ful">
            <img src={logo} className="mx-auto" />
          </div>
          <div className="max-w-3xl mx-auto bg-slate-100 p-6 bg-opacity-90">
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div>
                <a
                  className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                  href="#0"
                >
                  FALE COM UM ESPECIALISTA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
