import Image from 'next/image'
import Link from 'next/link'

const Brand = () => (
  <Link href="/" className="flex">
    <Image src="/logo.svg" width={40} height={40} alt="logo" />
    <h1 className="text-lg">Flomo Whitebard</h1>
  </Link>
)
export default Brand
