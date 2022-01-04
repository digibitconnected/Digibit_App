import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7930.429117000188!2d106.731802!3d-6.366273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef5c519c0027%3A0xc98a1fa1be73ab1c!2sJl.%20H.%20Nawi%20Malik%20No.40%2C%20Pd.%20Petir%2C%20Kec.%20Bojongsari%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016517!5e0!3m2!1sid!2sid!4v1641278752208!5m2!1sid!2sid"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
