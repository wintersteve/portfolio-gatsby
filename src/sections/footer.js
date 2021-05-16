import React from "react";
import facebookSvg from "../images/facebook.svg";
import linkedinSvg from "../images/linkedin.svg";
import githubSvg from "../images/github.svg";

function Footer() {
  return (
    <footer
      className="text-white text-center px-20 lg:px-40 py-20 lg:py-28"
      style={{ backgroundColor: "#1f2937" }}
    >
      <h5 className="font-bold">More about me</h5>
      <div className="flex justify-center my-10">
        <img src={facebookSvg} width="50" />
        <img className="mx-8" src={linkedinSvg} width="50" />
        <img src={githubSvg} width="50" />
      </div>
      <div className="mb-2">Contact me</div>
      <div className="font-bold mb-10">contact@wintersteve.com</div>
      <div className="text-sm">© Steve Winter</div>
    </footer>
  );
}

export default Footer;
