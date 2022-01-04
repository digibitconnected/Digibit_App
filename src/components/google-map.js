import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://goo.gl/maps/4uA7oGmM7FP59UQEA"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default GoogleMap;
