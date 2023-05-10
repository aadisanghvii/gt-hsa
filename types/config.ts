import { NavItem } from "@/types/nav"

export interface Config {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    github: any
  }
}
