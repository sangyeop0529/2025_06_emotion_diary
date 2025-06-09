import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import { getEmotionImage } from "./util/get-emotion-image";

function App() {
  return (
    <>
      <div>
        <img src={getEmotionImage(1)} alt="완전 기쁨" />
        <img src={getEmotionImage(2)} alt="기쁨" />
        <img src={getEmotionImage(3)} alt="보통" />
        <img src={getEmotionImage(4)} alt="나쁨" />
        <img src={getEmotionImage(5)} alt="완전 나쁨" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
