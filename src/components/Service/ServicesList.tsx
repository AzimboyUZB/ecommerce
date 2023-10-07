import React, { FC } from 'react'
import { Box } from '@mui/material'
import { IService } from './type'
import Image from 'next/image'

const ServicesList: FC<IService> = ({ service }) => {
  return (
    <>
      <Box sx={{ width: 190, height: 100 }}>
        <Image src={service.image} alt='brand' />
      </Box>
    </>
  )
}

export default ServicesList
