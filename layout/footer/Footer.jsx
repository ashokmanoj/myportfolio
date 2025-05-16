import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="p-2 dark:bg-black bg-[#ecf8f9] font-sans text-lg text-center">
        {/* Auto Update only year */}
        {new Date().getFullYear()}@Manu
     
      </div>
    </Fragment>
  );
};

export default Footer;
