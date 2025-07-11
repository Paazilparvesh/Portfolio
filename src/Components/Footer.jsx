import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer Bottom */}
      <div className="mt-16 flex flex-col md:flex-row justify-between text-sm border-t border-white pt-10">
        <p>
          Contact <span className="underline">hello@ander</span>
        </p>
        <p>© 2023 Template by Franklin Studio | Photos from pexels.com</p>
        <p className="underline">Privacy Policy</p>
      </div>
    </>
  );
};

export default Footer;
