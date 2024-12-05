import { useEffect, useRef } from "react"
import { MotionTransitionProps } from "./MotionTransition.types"
import { useAnimation, useInView, motion } from "motion/react"
import { fadeIn } from "@/utils/transitions"


export const MotionTransition = ({children,className}: MotionTransitionProps) => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: false})
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    
    if(isInView){
      mainControls.start("visible")
      slideControls.start("visible")
    }

  }, [isInView, mainControls, slideControls])
  

  return (
    <div ref={ref}>
      <motion.div 
        variants={fadeIn()}
        initial="hidden"
        animate={mainControls}
        exit='hidden'
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}