import Footer from "./layout/Footer";
import Header from "./layout/Header";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div
          id="app"
          className="w-[390px] h-[815px] bg-[#383cc2] rounded-[30px]"
        >
          <Header />
          <TodoList />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
