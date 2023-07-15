import { GridDirection, GridProps, GridTypeMap } from "@mui/material"
import { CommonProps } from "@mui/material/OverridableComponent"
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

export type ContentProps = {
  children: ReactNode | ReactNode[]
  direction?: GridDirection
  rowSpacing?: GridTypeMap["props"]["rowSpacing"]
}

export type SectionProps = {
  children?: React.ReactNode
} & SectionConditionalProps
