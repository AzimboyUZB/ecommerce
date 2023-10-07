import React, { FC } from 'react'
import { IService} from './type'
import styled from '@emotion/styled'


const ServiceCard: FC<IService> = ({service}) => {
  return (
    <ServiceCardStyle>
        <ServiceCardTitle>
            {service.title}
        </ServiceCardTitle>
        <Img src={service.image} />
    </ServiceCardStyle>
  )
}

export default ServiceCard


const ServiceCardStyle = styled.div`
    width: 175px;
    height: 150px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    box-shadow: 1px 2px 16px 3px #363A4514;
    padding: 10px 5px;
    @media screen and (max-width: 795px) {
      width: 30%;
    }
    @media screen and (max-width: 470px) {
      width: 45%;
    }
`

const ServiceCardTitle = styled.h2`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.5px;
`


const Img = styled.img`
  object-fit: contain;
  width: auto;
  height: auto;
`