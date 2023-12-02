import React from "react";
import PageHeros from "../components/PageHeros";
import FooterHero from "../components/FooterHero";
import instagram from "../images/instagram icon.svg";
import email from "../images/email-icon.svg";

export default function ContactUs() {
  return (
    <div>
      <PageHeros heroImage="contact-hero" />
      <div className="text-center flex flex-col justify-between items-center">
        <div className="flex flex-row justify-between items-center">
          <div id="gif" className="w-12 h-12 bg-[#D33F3F]">
            gif
          </div>
          <div className="w-[868px]">
            <h2 className="text-[45px] font-souvenir">Contact Us</h2>
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
          <div id="gif" className="w-12 h-12 bg-[#D33F3F]">
            gif
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <button className="w-[240px] h-[61px] border border-[#272728] text-[16px] font-black">
            <img src={email} className="w-[18px] h-[14px]" alt="email" />
            Email us now
          </button>
          <button className="w-[240px] h-[61px] border border-[#272728] text-[16px] font-black">
            <img src={instagram} className="w-[18px]" alt="instagram" />
            Visit instagram
          </button>
        </div>
      </div>
      <FooterHero
        image="contact-footer"
        title="Start dream journey here"
        description="Click the button below to begin your memorable experience at Redpoint!"
      />
    </div>
  );
}
