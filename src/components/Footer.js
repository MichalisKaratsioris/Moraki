import { Link } from "react-router-dom";
import Ig from "../assets/instagram.png";
import Fb from "../assets/facebook.png";
import Yt from "../assets/youtube.png";

export const Footer = () => {
  return (
    <footer className="p-2 bg-white border-t-2 sm:flex sm:items-center sm:justify-center dark:bg-gray-900 dark:border-t-2 dark:border-gray-600">
      <div className="w-full mx-auto max-w-screen-lg p-4 sm:flex sm:items-center sm:justify-between sm:text-sm">
        <span className="text-xl text-gray-500 sm:text-center dark:text-gray-400 sm:text-sm">
          <Link to="/" className="hover:underline">
            © 2030 Alejandra Mantiñan™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.instagram.com/alejandra_mantinan/"
              target="_blank"
              title="Alejandra's Instagram"
              rel="noreferrer"
            >
              <img src={Ig} className="mr-3 h-6 sm:h-9" alt="Instagram Logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/alejandra.mantinan"
              target="_blank"
              title="Alejandra's Facebook"
              rel="noreferrer"
            >
              <img src={Fb} className="mr-3 h-6 sm:h-9" alt="Facebook Logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@AlejandraMantinan/videos"
              target="_blank"
              title="Alejandra's Youtube Channel"
              rel="noreferrer"
            >
              <img src={Yt} className="mr-3 h-6 sm:h-9" alt="Youtube Logo" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
