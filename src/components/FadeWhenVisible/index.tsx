import { useRef, useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'

function FadeWhenVisible({ children }: { children: JSX.Element }) {
  const controls = useAnimation()
  const ref = useRef<any>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry.some((x) => x.isIntersecting)) return controls.start('visible')
    })
    if (ref?.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [controls, ref])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1.8 }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: -200 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeWhenVisible
