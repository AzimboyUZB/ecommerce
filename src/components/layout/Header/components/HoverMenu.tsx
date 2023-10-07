import styled from '@emotion/styled'
import { FC, useState } from 'react'
import { css } from '@emotion/react'
import { Container, Flex, List, MenuLink } from '@/components'
import { Colors, font } from '@/helpers'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { IHoverMenuWrapper } from '../../types'
import { debounce } from 'lodash'
import { CategoryT } from '@/helpers/type'

const HoverMenu: FC = () => {
  const { hoverMenuIsOpen } = useTypedSelector((state) => state.layout)
  const { categories } = useTypedSelector((state) => state.categories)
  const [activeMenuItem, setActiveMenuItem] = useState<CategoryT>(categories[0])

  const changeActiveMenuItem = debounce((category: CategoryT) => {
    setActiveMenuItem(category)
  }, 150)

  return (
    <Wrapper active={hoverMenuIsOpen}>
      <StyledContainer>
        <Flex align='flex-start'>
          <MenuItemsList active={activeMenuItem?.id}>
            <Flex direction='column' align='unset'>
              <List
                array={categories}
                Component={MenuLink}
                onHover={changeActiveMenuItem}
              />
            </Flex>
          </MenuItemsList>
          <MenuItemsContent>
            <Title>{activeMenuItem?.name_uz}</Title>
            <Flex wrap='wrap'>
              <List
                array={activeMenuItem?.children ? activeMenuItem.children : []}
                Component={MenuLink}
              />
            </Flex>
          </MenuItemsContent>
        </Flex>
      </StyledContainer>
    </Wrapper>
  )
}

export default HoverMenu

const Wrapper = styled.div<IHoverMenuWrapper>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${Colors.white_color};
  transition: all 0.3s ease;
  opacity: 0;

  ${({ active }) =>
    css`
      z-index: ${active ? 10 : -10};
      opacity: ${active ? 1 : 0};
      transform: ${active ? 'translateY(100%)' : 'translateY(95%)'};
    `}

  @media screen and (max-width: 990px) {
    display: none;
  }
`

const StyledContainer = styled((props: any) => <Container {...props} />)`
  margin-top: 20px;
  padding-inline: 30px;
  border-top: 1px solid ${Colors.medium_grey_2};
  border-bottom: 1px solid ${Colors.medium_grey_2};
`

const MenuItemsList = styled.div<{ active: number }>`
  position: relative;
  width: calc(100% / 3);
  padding-block: 25px;
  padding-right: 10px;
  border-right: 1px solid ${Colors.medium_grey_2};

  .menu-link {
    height: 40px;
    border-radius: 5px;
    padding: 5px;

    &:hover {
      .text {
        color: ${Colors.bright_green};
      }
    }

    ${({ active }) =>
      css`
        &.id-${active} {
          background-color: ${Colors.medium_grey_2};

          .text {
            color: ${Colors.bright_green};
          }
        }
      `}
  }
`

const MenuItemsContent = styled.div`
  position: relative;
  width: calc(100% / 3 * 2);
  padding-block: 25px;
  padding-left: 20px;

  .menu-link {
    width: 50%;
    padding-block: 5px;
  }
`

const Title = styled.h1`
  ${font('22px', '120%', '600')}
  padding-bottom: 10px;
`