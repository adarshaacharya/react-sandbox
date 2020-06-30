import {
  Button,
  Input,
  PageLayout,
  PasswordInput,
  Spinner,
} from 'components/common'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  /* calling styled components from other styled components */
  > ${Button}:first-of-type {
    margin-top: 40px;
  }

  > ${Input} {
    margin-top: 20px;
  }
`

const initialValues = {
  username: '',
  password: '',
}

let timeout
const Login = () => {
  const [formData, setFormData] = useState(initialValues)
  const [loading, setLoading] = useState(false)

  const { username, password } = formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              type='text'
              name='username'
              placeholder='Username'
              onChange={handleChange}
              value={username}
            />

            <PasswordInput
              name='password'
              onChange={handleChange}
              value={password}
            />
          </>
        )}
        <Button large type='submit' disabled={loading}>
          {loading ? 'Loading' : 'Login'}
        </Button>
        {!loading && (
          <>
            <div className='alt-text'>or</div>
            <Button secondary type='button'>
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  )
}

export default Login
