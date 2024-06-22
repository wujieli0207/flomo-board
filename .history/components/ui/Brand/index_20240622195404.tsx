import Image from 'next/image'
import Link from 'next/link'

const Brand = () => (
  <Link href="/">
    <Image src="/blinder.svg" width={120} height={50} alt="logo" />
    Flomo Whitebard
  </Link>
)
export default Brand
