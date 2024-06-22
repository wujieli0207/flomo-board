import Image from 'next/image'
import Link from 'next/link'

const Brand = () => (
  <Link href="/" className="flex">
    <Image src="/logo.svg" width={24} height={24} alt="logo" />
    Flomo Whitebard
  </Link>
)
export default Brand
