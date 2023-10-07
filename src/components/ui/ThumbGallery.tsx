
import styled from '@emotion/styled'
import { FC, useState } from 'react'
import { IThumbsGallery } from './types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import type { Swiper as ISwiper } from 'swiper/types/index'
import { Flex } from '..'
import { Colors } from '@/helpers'

const ThumbGallery: FC<IThumbsGallery> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<ISwiper | null>(null)

  return (
    <Wrapper>
      <Flex direction='column' align='flex-start' gap={20}>
        <StyledSwiper
          modules={[Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          slidesPerView={1}
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index}>
              <Image   src={image} alt={image} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
        <StyledThumbs
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          slidesPerView={3}
          spaceBetween={25}
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index}>
              <Image  src={image} alt={image} />
            </SwiperSlide>
          ))}
        </StyledThumbs>
      </Flex>
    </Wrapper>
  )
}

export default ThumbGallery

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  img {
    object-fit: cover;

    @media screen and (max-width: 382px) {
      width: 100%;
      padding-inline: 2px;
    }
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 460px;
  border: 1px solid ${Colors.medium_grey};
  border-radius: 10px;
`

const StyledThumbs = styled(Swiper)`
  width: 100%;

  .swiper-slide {
    width: 90px;
    height: 90px;
    border: 1px solid ${Colors.medium_grey};
    border-radius: 10px;
    background-color: ${Colors.white_color};
    cursor: pointer;
    padding: 2px;

    &-thumb-active {
      border-color: ${Colors.bright_green};
    }
  }
`
