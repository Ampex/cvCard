import { GridDirection } from "@mui/material"
import { ReactNode } from "react"

type SectionConditionalProps = {
  title?: string
  subheader?: string
  right?: boolean
  yellow?: boolean
  className?: string
  children?: React.ReactNode
  short?: boolean
  id: string
}

export type ProjectProps = {
  src: string
  href: string
  title: string
  description: string
}

export type ContentProps = { direction?: GridDirection; children: ReactNode[] }

export type SectionProps = {
  children?: React.ReactNode
} & SectionConditionalProps
