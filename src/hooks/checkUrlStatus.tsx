import { useEffect, useState } from 'react'

type useCheckUrlStatusReturn = {
  status: boolean
}

export const useCheckUrlStatus = (url: string): useCheckUrlStatusReturn => {
  const [status, setStatus] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const id = setTimeout(() => controller.abort(), 1000)
    try {
      fetch(url, {
        mode: 'no-cors',
        signal: controller.signal
      })
        .then(() => {
          setStatus(true)
        })
        .catch(() => {
          setStatus(false)
        })
    } catch (error) {
      setStatus(false)
    }
    clearTimeout(id)
  }, [url])

  return { status }
}
