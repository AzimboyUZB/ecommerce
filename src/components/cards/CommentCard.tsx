import Image from 'next/image'
import styled from '@emotion/styled'
import { FC } from 'react'
import { ICommentCard } from './types'
import { Flex } from '..'
import { IFlex } from '../ui/types'
import { Colors, Shadows, font } from '@/helpers'
import { StarIcon } from '@/assets/icons'

const CommentCard: FC<ICommentCard> = ({ data }) => {
  const { image, userName, rating, comment, created } = data

  return (
    <Wrapper direction='column' align='flex-start' gap={20}>
      <Header>
        <Flex direction='column' align='flex-start' gap={10}>
          <StyledFlex justify='space-between'>
            <Flex gap={15}>
              <StyledImage src={image} width={24} height={24} alt={userName} />
              <Name>{userName}</Name>
            </Flex>
            <Flex gap={5}>
              <Rating>{rating}</Rating>
              <Flex gap={2}>
                {[0, 1, 2, 3, 4, 5].map((_, index) => (
                  <StarIcon
                    key={index}
                    className={index < rating ? 'active' : 'disabled'}
                  />
                ))}
              </Flex>
            </Flex>
          </StyledFlex>
          <Date>{created}</Date>
        </Flex>
      </Header>
      <Content>
        <Comment>{comment}</Comment>
      </Content>
    </Wrapper>
  )
}

export default CommentCard

const Wrapper = styled((props: IFlex) => <Flex {...props} />)`
  max-width: 700px;
  width: 100%;
  padding: 20px;
  padding-bottom: 30px;
  border-radius: 10px;
  background-color: ${Colors.white_color};
  ${Shadows.shadow_white};
`

const StyledFlex = styled((props: IFlex) => <Flex {...props} />)`
  width: 100%;
`

const Header = styled.div`
  width: 100%;

  .active {
    path {
      fill: ${Colors.bright_green};
    }
  }

  .disabled {
    path {
      fill: ${Colors.medium_grey};
    }
  }
`

const Content = styled.div`
  width: 100%;
`

const StyledImage = styled(Image)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

const Name = styled.h2`
  ${font('16px', '150%', '700')};
  color: ${Colors.dark_grey};
`

const Date = styled.h4`
  ${font('14px', '120%', '500')};
  color: ${Colors.dark_grey};
`

const Rating = styled(Date)`
  color: ${Colors.bright_green};
`

const Comment = styled.p`
  ${font('16px', '150%', '500')};
  color: ${Colors.dark_grey};
  text-wrap: balance;
  text-align: justify;
`
