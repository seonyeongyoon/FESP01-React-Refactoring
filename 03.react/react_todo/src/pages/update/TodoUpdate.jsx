import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
// import Nav from "../../layout/Nav";
// import Header from "../../layout/Header";

export default function TodoUpdate() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [updateValue, setUpdateValue] = useState({});
  const _id = searchParams.get("_id");

  const getData = async () => {
    const res = await axios(`http://localhost:33088/api/todolist/${_id}`);
    setData(res.data.item);
  };
  const handleChange = (e, id) => {
    if (id === "done")
      return setUpdateValue({ ...updateValue, [id]: e.target.checked });
    setUpdateValue({ ...updateValue, [id]: e.target.value });
  };
  const updateData = async () => {
    try {
      const body = {
        title: updateValue.title ? updateValue.title : data.title,
        content: updateValue.content ? updateValue.content : data.content,
        done: updateValue.done !== undefined ? updateValue.done : data.done,
      };
      await axios
        .patch(`http://localhost:33088/api/todolist/${_id}`, body)
        .then((response) => {
          console.log("수정 완료", response);
          // navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const deleteData = async () => {
    await axios
      .delete(`http://localhost:33088/api/todolist/${_id}`)
      .then(function (response) {
        console.log("삭제 완료", response);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, [_id]);

  return (
    <>
      {/* <Nav /> */}
      {/* <Header title={"TodoApp 수정"} /> */}
      <header>
        <h1 className="font-bold text-white text-3xl px-7 py-7">
          TodoApp 수정
        </h1>
      </header>

      <div id="content  w-[390px] h-[80vh] ">
        <div className="wrapper h-[650px] px-7 py-7 bg-[#ffffff]">
          <form className="form  flex flex-col h-[100%]">
            <div className="titleBox flex flex-col justify-evenly ">
              <label htmlFor="title" className="py-3 font-semibold text-xl">
                제목
              </label>
              <input
                id="title"
                type="text"
                defaultValue={data?.title}
                className="titleInput border border-gray-300 border-solid"
                onChange={(e) => handleChange(e, "title")}
              />
            </div>
            <div className="detailBox flex flex-col justify-between ">
              <label htmlFor="content" className="py-3 font-semibold text-xl">
                상세 내용
              </label>
              <textarea
                id="content"
                defaultValue={data?.content}
                className="detailInput border border-gray-300 border-solid min-h-[250px]"
                onChange={(e) => handleChange(e, "content")}
              ></textarea>
            </div>
            <div className="executionCheck py-3 ">
              <label className="pr-3 font-semibold text-l">실행여부</label>
              <input
                defaultChecked={data?.done}
                type="checkbox"
                className="border border-gray-300 border-solid"
                onChange={(e) => handleChange(e, "done")}
              />
            </div>
            <button
              className="addButton py-4 bg-[#383cc2] text-xl text-white rounded-xl "
              type="button"
              onClick={updateData}
            >
              수정 완료하기
            </button>
            <button
              className="deleteButton mt-2 py-4 bg-[#c23838] text-xl text-white rounded-xl"
              type="button"
              onClick={deleteData}
            >
              삭제하기
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
