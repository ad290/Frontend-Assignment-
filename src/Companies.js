import React from "react";
import img4 from "./Asset/Coinbase-logo.png";
import img2 from "./Asset/Dropbox-Logo.png";
import img3 from "./Asset/Spotify_logo_with_text.svg.png";
import img1 from "./Asset/58482a62cef1014c0b5e4a13.png";
import img5 from "./Asset/Zoom-Logo.png";
import img6 from "./Asset/pngwing.com.png";

function Companies() {
  const images = [
    { src: img4, alt: "Coinbase", className: "h-10 md:h-20" },
    { src: img3, alt: "Spotify", className: "h-8 md:h-10" },
    { src: img6, alt: "Slack", className: "h-12 md:h-20" },
    { src: img2, alt: "Dropbox", className: "h-9 md:h-20" },
    { src: img1, alt: "Webflow", className: "h-10 md:h-10" },
    { src: img5, alt: "Zoom", className: "h-11 md:h-15" }
  ];

  return (
    <div className="flex justify-around items-center w-full p-8 bg-white space-x-6">
      {images.map((image, index) => (
        <div key={index} className="flex items-center">
          <img src={image.src} alt={image.alt} className={image.className} />
        </div>
      ))}
    </div>
  );
}

export default Companies;
