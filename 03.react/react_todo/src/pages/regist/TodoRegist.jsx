//import { axios } from 'axios';
//import { linkTo } from "../../Router";
//import Header from './../../layout/Header';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TodoRegist = () => {
  const [add, setAdd] = useState("");

  const handleAdd = async () => {
    await axios.post("http://localhost:33088/api/todolist", {
      title: titleInput.value,
      content: detailInput.value,
      done: false,
    })
    .then(function (response) {
      console.log(response);
      Link("/");
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  return (
    <>  
    <header>
      <h1 className="text-[29px] text-white px-[30px] py-[12px] m-1 font-bold">TodoApp 등록</h1>
    </header>
    <div id="content" className="bg-white h-[80vh] w-[390px]">
      <div className="wrapper">
        <form action="" className="form flex flex-col justify-around gap-[25px] p-[30px]">
          <div className="titleBox flex flex-wrap flex-col justify-evenly gap-[15px] text-xl">
            <label htmlFor="title">제목</label>
            <input 
              id="title" 
              className="titleInput min-h-[35px] rounded-[5px] border border-[#d9d9d9]" 
              type="text" 
              onChange=""  
            />
          </div>
          <div className="detailBox flex flex-wrap flex-col justify-between gap-[15px] text-xl">
            <label htmlFor="detail">상세 내용</label>
            <textarea id="detail" className="detailInput min-h-[85px] rounded-[5px] border border-[#d9d9d9] h-[360px] resize-none"></textarea>
          </div>
          <button 
            className="addButton bg-[#383cc2] text-white py-4 text-xl rounded-[10px] border-none cursor-pointer" 
            type="button"
            onclick={handleAdd}
            >추가하기</button>
        </form>
      </div>
    </div>
    </>
  )
};

export default TodoRegist;