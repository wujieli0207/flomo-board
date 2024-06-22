import Image from 'next/image'
import Link from 'next/link'

const Brand = () => (
  <Link href="/" className="flex">
    <Image src="/logo.svg" width={40} height={40} alt="logo" />
    Flomo Whitebard
  </Link>
)
export default Brand
