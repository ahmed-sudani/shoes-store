import { useEffect, useRef } from 'react'

function useOutsideAlerter<T extends HTMLElement>(cb: Function) {
  const componentRef = useRef<T>(null)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target as Node)
      ) {
        cb()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [componentRef])
  return componentRef
}

export default useOutsideAlerter
