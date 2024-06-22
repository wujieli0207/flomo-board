import NavLink from '../NavLink'

const Hero = () => (
  <section>
    <div className="custom-screen py-28 text-gray-600">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
          可视化你的 Flomo 笔记
        </h1>
        <p className="max-w-xl mx-auto">
          在白板上整理、展示你的 Flomo 笔记，多一维度的思考
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <NavLink
            href="/"
            className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
          >
            Coming soon
          </NavLink>
          <NavLink
            href="#cta"
            className="text-gray-700 border hover:bg-gray-50"
          >
            Learn more
          </NavLink>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
