import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  className?: string
}

const SectionWrapper = ({ children, className }: IProps) => (
  <section lassName={`py-16 ${className ?? ''}`}>{children}</section>
)

export default SectionWrapper
