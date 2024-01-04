'use client'
import { TokenContext } from '@/context/TokenContext'
import React, { useContext } from 'react'

const useToken = () => {
  const {token,updateToken,deleteToken} = useContext(TokenContext);
  return {token,updateToken,deleteToken};
}

export default useToken