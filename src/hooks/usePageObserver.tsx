import React, { useEffect, useState } from 'react'

interface IProps {
  getNextPage: Function
  loadingElementRef: any
  refRoot: any
}

function usePageObserver({ refRoot, loadingElementRef }: IProps) {
  const [nextPageTrigger, setNextPageTrigger] = useState(false)

  useEffect(() => {
    if (!refRoot.current || !loadingElementRef.current) return

    const observer =
      new IntersectionObserver(entries => {
        const [element] = entries
        if (element.isIntersecting) setNextPageTrigger(prev => !prev)
      }, {
        root: refRoot.current,
        threshold: 0
      })

    const currentElement = loadingElementRef.current
    const currentObserver = observer

    if (currentElement) {
      currentObserver.observe(currentElement)
    }

    return () => {
      if (currentElement) currentObserver.unobserve(currentElement)
    }
  }, [refRoot.current, loadingElementRef.current])

  return {
    nextPageTrigger
  }
}

export default usePageObserver