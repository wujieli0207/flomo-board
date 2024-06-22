import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  id: string
  className?: string
}

const SectionWrapper = ({ children, className }: IProps) => (
  <section className={`py-16 ${className ?? ''}`}>{children}</section>
)

export default SectionWrapper
