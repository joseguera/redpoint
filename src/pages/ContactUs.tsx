import React from "react";
import PageHeros from "../components/PageHeros";
import FooterHero from "../components/FooterHero";
import instagram from "../images/instagram icon.svg";
import email from "../images/email-icon.svg";
import butterfly from "../images/gifs/img_gif_contactus1.svg";
import tree_lights from "../images/gifs/RedPiont_ILLU_004.gif";

export default function ContactUs() {
  return (
    <div className="flex flex-col justify-center items-center gap-24 pt-16">
      <PageHeros heroImage="contact-hero" />
      <div className="flex flex-row items-center static">
        <img src={butterfly} alt="butterfly" className="w-[78px] h-[84px] absolute top-[25rem] left-[9rem]" />
        <div className="text-center flex flex-col justify-between items-center gap-16">
          <div className="flex flex-row justify-between items-center">
            <div className="w-[690px] flex flex-col justify-center items-center text-center gap-6">
              <h1 className="text-[45px] font-souvenir">Contact Us</h1>
              <p>
                We're happy to answer any questions you may have. Email us at{" "}
                <a
                  href="mailto:redpoint@mixtrip.com"
                  className="text-[#D33F3F] font-bold underline"
                >
                  redpoint@mixtrip.com
                </a>
                , and we'll get back to you as soon as possible! Visit our
                instagram{" "}
                <a
                  href="instagram.com"
                  className="text-[#D33F3F] font-bold underline"
                >
                  redpoint-mixtrip
                </a>{" "}
                to get updates of Redpoint!
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-8">
            <a
              href="mailto:redpoint@mixtrip.com"
              className="w-[240px] h-[61px] bg-white border border-[#272728] font-black flex flex-row justify-center items-center gap-3"
            >
              <img src={email} className="w-[18px] h-[14px]" alt="email" />
              Email us now
            </a>
            <a
              href="mailto:redpoint@mixtrip.com"
              target="_blank"
              rel="noreferrer"
              className="w-[240px] h-[61px] bg-white border border-[#272728] font-black flex flex-row justify-center items-center gap-3"
            >
              <img src={instagram} className="w-[18px]" alt="instagram" />
              Visit instagram
            </a>
          </div>
        </div>
        <img src={tree_lights} alt="tree lights" className="w-[219px] absolute top-[34.5rem] right-[7.5rem]" />
      </div>
      <FooterHero
        image="contact-footer"
        title="Start dream journey here"
        description="Click the button below to begin your memorable experience at Redpoint!"
      />
    </div>
  );
}
