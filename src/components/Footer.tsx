import { IconContext } from "react-icons";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => (
  <IconContext.Provider value={{size: "2rem"}}>
  <footer className="h-40 bg-gray-500 text-center py-12">
    <ul className="flex justify-center mx-24 mb-4">
      <li className="mx-4"><a href="https://twitter.com"><FaTwitter /></a></li>
      <li className="mx-4"><a href="https://github.com"><FaGithub /></a></li>
      <li className="mx-4"><a href="https://facebook.com"><FaFacebook /></a></li>
    </ul>
    <small>&copy; example 2020.</small>
  </footer>
  </IconContext.Provider>
)

export default Footer;