import { Routes, Route } from "react-router-dom";
import LayoutBasic from "../components/layout/layoutBasic";
import Welcome from './welcome/index'
import Home from './home/index'
import NotFound from "./404";
import '../utils/i18n'

const App = () => {

  return <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/" element={<LayoutBasic />}>
      <Route path="home" element={<Home />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
}

export default App;
