import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styled from "@emotion/styled";
import { Colors } from "@/helpers";
import { IBrandList } from "./types";

const Banner: FC<IBrandList> = ({ brands }) => {
  return (
    <>
      <WrSwiper
        pagination={true}
        loop={true}
        freeMode={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {brands.map((item) => (
          <BannerSw key={item.id}>
              <BannerText>
                {item.title_uz}
              </BannerText>
            <BannerImg src={item.image} alt={item.slug}/>
          </BannerSw>
        ))}
      </WrSwiper>
    </>
  );
};

export default Banner;
const WrSwiper = styled(Swiper)`
  width: 100%;
  height: 390px;
  display: flex !important;
  margin-bottom: 100px;
`;
const BannerSw = styled(SwiperSlide)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
`;
const BannerImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`
const BannerText = styled.span`
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 36px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: ${Colors.bright_orange}
`