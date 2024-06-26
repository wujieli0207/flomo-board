import Link from 'next/link'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  href: string
  className?: string
}

const NavLink = ({ children, href, className = '' }: IProps) => (
  <Link
    href={href}
    className={`py-2.5 px-4 text-center rounded-lg duration-150 ${className}`}
  >
    {children}
  </Link>
)

export default NavLink
