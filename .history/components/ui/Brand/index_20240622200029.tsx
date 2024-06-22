import Image from 'next/image'
import Link from 'next/link'

const Brand = () => (
  <Link href="/" className="flex items-center">
    <Image src="/logo.svg" width={40} height={40} alt="logo" />
    <h1 className="text-lg font-bold">Flomo Whitebard</h1>
  </Link>
)
export default Brand
