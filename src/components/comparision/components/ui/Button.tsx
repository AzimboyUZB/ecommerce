import styled from '@emotion/styled'
import { ComponentProps, FC } from 'react'
import { IButton } from './types'
import { Colors, font } from '@/helpers'

const Button: FC<
  IButton & Omit<ComponentProps<'button'>, 'children' | 'text'>
> = ({ text, children, ...rest }) => {
  return <StyledButton {...rest}>{text ? text : children}</StyledButton>
}

export default Button

const StyledButton = styled.button`
  ${font('14px', '120%', '500')};
  padding: 12px 56px;
  border: 1px solid ${Colors.medium_grey};
  border-radius: 10px;
  color: ${Colors.text_color};
  background-color: ${Colors.white_color};
  flex-shrink: 0;

  &.active {
    border-color: ${Colors.bright_green};
    color: ${Colors.bright_green};
  }
`
