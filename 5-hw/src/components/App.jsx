import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home Info</div>}></Route>
      <Route path="/week" element={<div>Week Info</div>}></Route>
      <Route path="/day" element={<div>Day Info</div>}></Route>
    </Routes>
  );
};
