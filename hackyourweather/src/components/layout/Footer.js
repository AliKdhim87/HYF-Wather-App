import React from "react";

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer class=' bg-dark'>
      <div class=' text-center py-3'>
        © {getYear} Copyright:
        <a href='https://www.linkedin.com/in/ali-amouri-kadhim-082b75189/'>
          {"Ali Kadhim "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
