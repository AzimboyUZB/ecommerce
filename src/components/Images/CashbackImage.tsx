import Image from "next/image";
import React, { FC, SVGProps } from "react";

function CashbackImage() {
  return (
    <Image
      src="/CashbackImage.png"
      width={550}
      height={200}
      alt="Picture of the author"
    />
  );
}

export default CashbackImage;
