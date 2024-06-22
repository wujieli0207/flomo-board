import SectionWrapper from '../../SectionWrapper'
import NavLink from '../NavLink'

const FooterCTA = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          {/* TODO */}
        </h2>
        <p className="mt-3 text-gray-600">{/* TODO */}</p>
        <NavLink
          href="/"
          className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
        >
          Coming soon
        </NavLink>
      </div>
    </div>
  </SectionWrapper>
)

export default FooterCTA
