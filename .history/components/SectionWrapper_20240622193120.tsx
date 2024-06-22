import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  id?: string
  className?: string
}

const SectionWrapper = ({ children, id, className }: IProps) => (
  <section id={id} className={`py-16 ${className ?? ''}`}>
    {children}
  </section>
)

export default SectionWrapper
