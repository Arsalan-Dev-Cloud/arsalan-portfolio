import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function useScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements =
        document.querySelectorAll<HTMLElement>(".reveal")

      if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => {
          element.classList.add("show")
        })

        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show")

              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -40px 0px",
        }
      )

      elements.forEach((element) => {
        observer.observe(element)
      })

      return () => {
        observer.disconnect()
      }
    }, 50)

    return () => {
      clearTimeout(timer)
    }
  }, [location.pathname])
}

export default useScrollReveal