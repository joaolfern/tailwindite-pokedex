import React, { useState, createContext, ReactElement } from 'react'

interface ILoadingContext {
  isAppLoading: boolean
  setIsAppLoading?: Function
}

const AppLoadingContext = createContext<ILoadingContext>({ isAppLoading: false })

function AppLoadingContextProvider({ children }: { children: ReactElement }) {
  const [isAppLoading, setIsAppLoading] = useState(false)

  return (
    <AppLoadingContext.Provider value={{ isAppLoading, setIsAppLoading }} >
      {children}
    </AppLoadingContext.Provider>
  )
}

export { AppLoadingContext, AppLoadingContextProvider }
