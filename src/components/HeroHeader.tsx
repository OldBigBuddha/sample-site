const HeroHeader: React.FC = () => (
  <header className="h-96 bg-center bg-no-repeat bg-cover px-8 py-12" style={{backgroundImage: "url(/img/hero.webp)"}}>
    <div className="flex justify-between text-center">
      <span className="text-xl font-bold">site name</span>
      <nav>
        <ul className="flex">
          <li className="mx-8">
            <a href="#top">Home</a>
          </li>
          <li className="mx-8">
            <a href="#feature">Feature</a>
          </li>
          <li className="mx-8">
            <a href="#story">Story</a>
          </li>
          <li className="mx-8">
            <a href="#profile">Profile</a>
          </li>
        </ul>
      </nav>
    </div>
    <h1 id="top" className="w-64 h-32 flex justify-center items-center text-3xl font-bold bg-opacity-30 bg-gray-50 mx-auto mt-20 py-auto">Hello World</h1>
  </header>
)

export default HeroHeader;