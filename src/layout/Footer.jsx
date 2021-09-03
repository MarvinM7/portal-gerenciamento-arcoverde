import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <img
        src={`${process.env.PUBLIC_URL}/imgs/wave.svg`}
        alt={''}
        style={{"maxWidth":"100%", "minWidth": "100%", "zIndex":"-1", "position":"absolute", "opacity": "85%"}}
      />
      <img
        src={`${process.env.PUBLIC_URL}/imgs/wave1.svg`}
        style={{"maxWidth":"100%", "minWidth": "100%", "zIndex":"-1", "position":"absolute", "opacity": "85%"}}
      />
    </div>
  )
}

export default Footer;