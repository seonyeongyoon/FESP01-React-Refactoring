import { Route, Routes } from "react-router-dom";
import TodoUpdate from "./pages/update/TodoUpdate";
import TodoList from "./pages/TodoList";
import TodoRegist from './pages/regist/TodoRegist';
function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#e8e8e8]">
        <div
          id="app"
          className="w-[390px] bg-[#383cc2] rounded-[30px]"
        >
          <Routes>
            <Route>
              <Route path="/list" element={<TodoList />} />
              <Route path="/update" element={<TodoUpdate />} />
              <Route path="/regist" element={<TodoRegist />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
