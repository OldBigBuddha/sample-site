const HeroHeader: React.FC = () => (
  <header className="bg-center bg-no-repeat bg-cover" style={{height: "500px" ,backgroundImage: "url(/img/hero.webp)"}}>
    <div className="flex justify-between text-center bg-opacity-40 bg-gray-200 py-4 px-8">
      <span className="text-xl font-bold">site name</span>
      <nav>
        <ul className="flex">
          <li className="mx-8 hover:underline">
            <a href="#feature">Feature</a>
          </li>
          <li className="mx-8 hover:underline">
            <a href="#story">Story</a>
          </li>
          <li className="mx-8 hover:underline">
            <a href="#profile">Profile</a>
          </li>
        </ul>
      </nav>
    </div>
    <h1 id="top" className="w-64 h-32 flex justify-center items-center text-3xl font-bold bg-opacity-30 bg-gray-50 mx-auto mt-32 py-auto">Hello World</h1>
  </header>
)

export default HeroHeader;