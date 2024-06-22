import Link from 'next/link'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  href: string
  className?: string
  [key: string]: any // 添加其他属性
}

const NavLink = ({ children, href, ...props }: IProps) => (
  <Link
    href={href}
    {...props}
    className={`py-2.5 px-4 text-center rounded-lg duration-150 ${
      props?.className || ''
    }`}
  >
    {children}
  </Link>
)

export default NavLink
