import styled from '@emotion/styled'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IList } from './types'
import { Colors } from '@/helpers'
import { Navigation } from 'swiper/modules'

const Carousel: FC<IList> = ({ array, Component, sm }) => {
  return (
    <StyledSwiper
      slidesPerView={1}
      spaceBetween={25}
      speed={10000}
      autoplay={{
        delay: 10,
      }}
      loop={true}
      modules={[Navigation]}
      navigation={true}
      breakpoints={
        sm
          ? {
              510: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
              1150: {
                slidesPerView: 4,
              },
            }
          : {
              510: {
                slidesPerView: 2,
              },
              730: {
                slidesPerView: 3,
              },
              950: {
                slidesPerView: 4,
              },
              1150: {
                slidesPerView: 5,
              },
            }
      }
    >
      {array.map((item, index: number) => (
        <SwiperSlide key={index}>
          <Component data={item} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  )
}

export default Carousel

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding: 20px 10px !important;

  .swiper-button {
    &-prev,
    &-next {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background-color: ${Colors.medium_grey};
      border-radius: 50%;
      transform: translateY(-15px);

      &::after {
        content: '';
        width: 8px;
        height: 8px;
        border-top: 2px solid ${Colors.white_color};
        border-right: 2px solid ${Colors.white_color};
      }
    }

    &-prev {
      &::after {
        transform: translateX(2px) rotate(-135deg);
      }
    }

    &-next {
      &::after {
        transform: translateX(-2px) rotate(45deg);
      }
    }

    &-disabled {
      opacity: 0.5;
    }

    &-lock {
      display: none;
      opacity: 0;
    }
  }
`
