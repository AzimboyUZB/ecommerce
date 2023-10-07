import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import { Colors, font } from '@/helpers'
import { Flex } from '..'
import { IMenuLik } from './types'

const MenuLink: FC<IMenuLik> = ({ data, onHover }) => {
  const { id, name_uz, image, slug } = data

  return (
    <Link
      href={`/productlist/${slug}`}
      onMouseOver={() => (onHover ? onHover(data) : {})}
      className={`menu-link id-${id}`}
    >
      <Flex gap={5}>
        {image ? <Image src={image} width={32} height={32} alt={name_uz} /> : null}
        <Text className='text'>{name_uz}</Text>
      </Flex>
    </Link>
  )
}

export default MenuLink

const Text = styled.h5`
  ${font()}
  color: ${Colors.text_color};
  transition: all 0.2s ease;

  &:hover {
    color: ${Colors.bright_green};
  }
`
