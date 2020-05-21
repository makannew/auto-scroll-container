import { useEffect, useRef } from 'react'

export default function useDelayedFunction(
  originalFunction,
  delay,
  catchCancel
) {
  const lastCall = useRef({ timeout: null, cancel: null }).current
  function delayedFunction() {
    if (lastCall.cancel) {
      lastCall.cancel()
      lastCall.cancel = null
    }
    if (lastCall.timeout) {
      clearTimeout(lastCall.timeout)
      lastCall.timeout = null
    }
    return new Promise((resolve, reject) => {
      let stillValid = true
      lastCall.cancel = (dontReject) => {
        stillValid = false
        if (catchCancel && !dontReject) {
          reject({ message: 'Function call canceled', timestamp: Date.now() })
        }
      }
      lastCall.timeout = setTimeout(async () => {
        lastCall.timeout = null
        try {
          const result = await (originalFunction &&
            originalFunction(...arguments))
          lastCall.cancel = null
          if (stillValid) {
            resolve(result)
          }
        } catch (err) {
          lastCall.cancel = null
          if (stillValid) {
            reject(err)
          }
        }
      }, delay || 0)
    })
  }

  const cancelIt = (preventReject) => {
    if (lastCall.cancel) {
      lastCall.cancel(preventReject)
      lastCall.cancel = null
    }
    if (lastCall.timeout) {
      clearTimeout(lastCall.timeout)
      lastCall.timeout = null
    }
  }

  useEffect(() => {
    return () => {
      if (lastCall.cancel) {
        lastCall.cancel(true)
      }
      if (lastCall.timeout) {
        clearTimeout(lastCall.timeout)
      }
    }
  }, [])

  return [delayedFunction, cancelIt]
}
