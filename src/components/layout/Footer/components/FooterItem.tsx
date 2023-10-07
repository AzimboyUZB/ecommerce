import React from 'react'
import styled from '@emotion/styled'
import { footerItems } from '@/data/footerItem'
import { Colors } from '@/helpers/colors'

const FooterItem = () => {
  return (
    <FooterItems>
      {footerItems.map((item) => (
        <FooterContent key={item.id}>
          <FooterTitle>{item.title}</FooterTitle>
          <FooterText>{item.item1}</FooterText>
          <FooterText>{item.item2}</FooterText>
          <FooterText>{item.item3}</FooterText>
          <FooterText>{item.item4}</FooterText>
          <FooterText>{item.item5}</FooterText>
          <FooterText>{item.item6}</FooterText>
        </FooterContent>
      ))}
    </FooterItems>
  )
}

export default FooterItem

const FooterItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 30px;
  column-gap: 55px;
  row-gap: 10px;
  padding-bottom: 100px;
`
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const FooterTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  color: ${Colors.dark_grey};
  margin-bottom: 10px;
`
const FooterText = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  cursor: pointer;
  color: ${Colors.dark_grey};
  &:hover {
    color: ${Colors.bright_green};
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`
