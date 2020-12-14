import { useState, useEffect } from "react"

export const useInnerwidth = () => {
  const [innerWidth, setInnerWidth] = useState(320)
  useEffect(() => {
    setInnerWidth(window.innerWidth)
    return () => {
      setInnerWidth(320)
    }
  }, [])
  return innerWidth
}
