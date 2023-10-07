import { Flex } from '@/components'
import * as MU from '@mui/material'
import { FC, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Logo } from '@/assets/icons'
import Link from 'next/link'
import { Input } from '@mui/material'
import { useRouter } from 'next/router'
import axios from 'axios'

const LoginForm: FC = () => {
  const [postData, setPostData] = useState({ email: '', code: '' })
  const [isActiveCode, setIsActiveCode] = useState(false)
  const router = useRouter()
  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setPostData({ ...postData, [target.name]: target.value })
  }

  function loginHandler() {
    if (postData.email !== '') {
      axios
        .post('https://ecommerce.main-gate.appx.uz/dev/v1/auth/login', {
          email: postData.email,
        })
        .then(function (response) {
          if (response.data.isOk) {
            setIsActiveCode(true)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  function verifyHandler() {
    if (postData.code !== '') {
      axios
        .post('https://ecommerce.main-gate.appx.uz/dev/v1/auth/verify', {
          email: postData.email,
          code: postData.code,
        })
        .then(function (response) {
          if (response.data.isOk) {
            setIsActiveCode(false)
            localStorage.setItem('access_token', response.data.accessToken)
            localStorage.setItem('refresh_token', response.data.refreshToken)
            router.push('/')
          }
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  useEffect(() => {
    if(localStorage.getItem('access_token')){
      router.push({ pathname: "/" });
    }
  }, []);

  return (
    <Flex align='start' direction='column' gap={15}>
      <Link href='/'>
        <Logo />
      </Link>
      {isActiveCode ? (
        <>
          <label>Code</label>
          <Input
            id='code'
            type='text'
            name='code'
            placeholder='Code'
            value={postData.code}
            onChange={handleChange}
          />
          Вам отправлен код
        </>
      ) : (
        <>
          <label>E-mail</label>
          <Input
            id='email'
            type='email'
            name='email'
            placeholder='Email'
            value={postData.email}
            onChange={handleChange}
          />
        </>
      )}
      <Button onClick={() => (isActiveCode ? verifyHandler() : loginHandler())}>
        {isActiveCode ? 'Зарегистрироваться' : 'Получить код'}
      </Button>
    </Flex>
  )
}

export default LoginForm
const Button = styled.button`
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #00C65E;
  color: #fff;
  font-family: 'TT Norms', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`
const StyledInput = styled(MU.Input)`
  width: 1000px;
`
const MainForm = styled.div``
