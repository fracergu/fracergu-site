import { useEffect, useState } from 'react'

type useCheckContainerStatus = {
  status: boolean
}

type checkContainerResponse = {
  status: boolean
}

export const useCheckUrlStatus = (name: string): useCheckContainerStatus => {
  const [status, setStatus] = useState(false)
  useEffect(() => {
    fetch('https://fracergu-site-backend.fracergu.dev/api/checkContainer?name=' + name).then(
      (resp) => {
        resp.json().then((data: checkContainerResponse) => {
          setStatus(data.status)
        })
      }
    )
  }, [name])
  return { status }
}
