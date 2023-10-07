import styled from '@emotion/styled'
import Link from 'next/link'
import { FC } from 'react'
import { font } from '@/helpers'
import { ISectionTitle } from '@/helpers/type'
import { Flex } from '../ui/Flex'
import { Container } from '@mui/material'

const SectionTitle: FC<ISectionTitle> = ({ title, link }) => {
  !link.text ? (link.text = 'Смотреть все') : link.text

  return (
    <Container>
      <Flex justify='space-between'>
        <Title>{title}</Title>
        <StyledLink href={link.url}>{link.text}</StyledLink>
      </Flex>
    </Container>
  )
}

export default SectionTitle

const Title = styled.h1`
  ${font('24px', '120%', '700')};

  @media screen and (min-width: 510px) {
    font-size: 28px;
  }

  @media screen and (min-width: 730px) {
    font-size: 32px;
  }
`

const StyledLink = styled(Link)`
  ${font('14px', '120%', '500')}
`
