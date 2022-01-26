import React from 'react'
import { IHeaderLight } from './types'

function HeaderLight ({ children, className, ...reset }: IHeaderLight) {
  return (
    <span
      { ...reset }
      className={`${className} transition w-12 h-12 block rounded-full`}
    >
      {children}
    </span>
  )
}

export default HeaderLight
