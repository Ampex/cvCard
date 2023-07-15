import { useRef } from "react"
import { Grid } from "@mui/material"
import { motion, Variants, useInView } from "framer-motion"
import { ContentProps } from "config/types"
import useMedia from "components/hooks"

const container: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
    },
  },
}

const item: Variants = {
  hidden: { y: 14, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function Content({ direction, children, rowSpacing }: ContentProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { isMobile } = useMedia()

  return (
    <Grid ref={ref}>
      <motion.ul
        variants={container}
        initial="hidden"
        animate={isInView && "visible"}
        style={{ listStyle: "none", padding: 0, margin: 0 }}
      >
        <Grid
          container
          spacing={2}
          direction={direction}
          alignItems={isMobile ? "center" : "initial"}
          justifyContent="space-between"
          rowSpacing={rowSpacing}
        >
          {Array.isArray(children) ? (
            children.map((element, index) => (
              <Grid item>
                <motion.li key={index} variants={item} transition={{ duration: 0.4 }}>
                  {element}
                </motion.li>
              </Grid>
            ))
          ) : (
            <Grid item>
              <motion.li variants={item} transition={{ duration: 0.4 }}>
                {children}
              </motion.li>
            </Grid>
          )}
        </Grid>
      </motion.ul>
    </Grid>
  )
}
