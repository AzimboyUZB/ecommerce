import styled from '@emotion/styled'
import { css } from "@emotion/react";
import Link from 'next/link';
import { IImage } from './type';
import InformBtnIcon from '@/assets/icons/InformBtnIcon';




const InformSection = () => {
  return (
    <InformSectionStyle>
        <Link href="" >
            <InformSectionCardStyle color='#00C65E'>
                <InformSectionCardContent>
                    <InformSectionCardContentTitle>Кешбек за любую покупку!  </InformSectionCardContentTitle>
                    <InformSectionCardBtn>
                        <InformBtnIcon/>
                    </InformSectionCardBtn>
                </InformSectionCardContent>
                <InformSectionCardImage>
                    <Img src="/images/Inform/Sale.png" top="0"  left="25%" />
                    <Img src="/images/Inform/Sale2.png" left="0" bottom="-10px"  />
                    <Img src="/images/Inform/Sale3.png" right='0' />
                </InformSectionCardImage>
            </InformSectionCardStyle>
        </Link>
        <Link href="">
            <InformSectionCardStyle color='#FFB762'>
                <InformSectionCardContent>
                        <InformSectionCardContentTitle> Экспресс доставка за 2 часа 

                        </InformSectionCardContentTitle>

                        <InformSectionCardBtn>
                            <InformBtnIcon/>
                        </InformSectionCardBtn>
                    </InformSectionCardContent>
                    <InformSectionCardImage>
                        <Img src="/images/Inform/Delivery.png" />
                    </InformSectionCardImage>
                </InformSectionCardStyle>
        </Link>
    </InformSectionStyle>
  )
}

export default InformSection




const InformSectionStyle = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
`

const InformSectionCardStyle = styled.div`
    width: 570px;
    height: 200px;
    border-radius: 10px;
    display: flex;
    padding: 10px;
    ${({color}) =>
    css`
        background-color: ${color};
    `}
    @media screen and (max-width: 1200px) {
        width: 100%;
        height: 200px;
        margin-bottom: 20px;
    }
`

const InformSectionCardContent = styled.div`
    width: 40%;
    height: 100%;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const InformSectionCardImage = styled.div`
    width: 60%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const InformSectionCardContentTitle = styled.h2`
    font-size: 22px;
    color: white;
`

const InformSectionCardContentTitleStrong = styled.h1`
    font-size: 28px;
    color: #00C65E;
`

const InformSectionCardBtn = styled.button`
    width: 24px;
    height: 24px;
    border: 1px solid white;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Img = styled.img<IImage>`
    position: absolute;
    ${({bottom, left, right, top}) =>
    css`
        bottom: ${bottom};
        left: ${left};
        right: ${right};
        top: ${top}
    `}
`