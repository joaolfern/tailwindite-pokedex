import React from 'react'
import HeaderLight from './HeaderLight'
import { IHeaderLight } from './types'

function HeaderLightBorderful ({ children, className, ...rest }: IHeaderLight) {
  return (
    <HeaderLight {...rest} className={`${className} border-4 border-black`}>
      {children}
    </HeaderLight>
  )
}

export default HeaderLightBorderful
