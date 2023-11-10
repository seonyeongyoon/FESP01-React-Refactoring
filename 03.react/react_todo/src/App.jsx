import Footer from './layout/Footer';
import TodoRegist from "./pages/regist/TodoRegist";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#e8e8e8]">
        <div
          id="app"
          className="w-[390px] bg-[#383cc2] rounded-[30px]"
        >
          <TodoRegist />
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
