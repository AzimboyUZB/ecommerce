import styled from '@emotion/styled'
import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from '@/data/service';

const ServicesSection = () => {
  return (
    <ServiceSectionStyle>
        {
            services.map((item) => (
              <ServiceCard key={item.id} service={item} />
            ))
        }
    </ServiceSectionStyle>
  )
}

export default ServicesSection


const ServiceSectionStyle = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    gap: 22px;
    flex-wrap: wrap;
` 