import Image from "next/image";
import React, { FC, SVGProps } from "react";

function DeliveryImage() {
  return (
    <Image
      src="/DeliveryImage.png"
      width={550}
      height={200}
      alt="Picture of the author"
    />
  );
}

export default DeliveryImage;
