import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Header />
      <Button
        text="보통"
        onClick={() => {
          console.log("normal");
        }}
      />
      <Button
        text="긍정"
        onClick={() => {
          console.log("POSITIVE");
        }}
        type={"POSITIVE"}
      />
      <Button
        text="부정"
        onClick={() => {
          console.log("NEGATIVE");
        }}
        type={"NEGATIVE"}
      />
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
