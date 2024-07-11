import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/projects" element={<div>This is Niraj</div>} />
        <Route path="/projects/tic-tac" element={<div>This is who</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
