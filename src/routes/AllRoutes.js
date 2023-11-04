import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Schedule,
  Photos,
  Videos,
  Music,
  Contact,
  PageNotFound,
} from "../pages/AllPages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home title="" />} />
        <Route path="/about" element={<About title="- About" />} />
        <Route path="/schedule" element={<Schedule title="- Schedule" />} />
        <Route path="/photos" element={<Photos title="- Photos" />} />
        <Route path="/videos" element={<Videos title="- Videos" />} />
        <Route path="/music" element={<Music title="- Music" />} />
        <Route path="/contact" element={<Contact title="- Contact" />} />
        <Route path="*" element={<PageNotFound title="- 404" />} />
      </Routes>
    </div>
  );
};
