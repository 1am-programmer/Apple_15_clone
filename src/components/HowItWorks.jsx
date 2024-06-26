import React from "react";
import { chipImg, frameImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HowItWorks = () => {
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center my-20 w-full">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br />A monster win for gaming
          </h2>

          <p className="hiw-subtitle">
            It's here the biggest redesign in the history of apple's GPU's
          </p>
        </div>

        <div className="mt-10 md:mt-20  mb-14">
          <div className="relative flex-center  h-full">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative  z-10"
              />

              <div className="hiw-video"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
