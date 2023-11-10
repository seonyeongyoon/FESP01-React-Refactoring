import axios from "axios";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { linkTo } from "../../Router";
// import { linkTo } from "../../Router";
// import TodoRegist from "../regist/TodoRegist";
// import TodoInfo from "../info/TodoInfo";
// import TodoUpdate from "../update/TodoUpdate";

const TodoList = async function (): Promise<HTMLElement> {
  const page = document.createElement("div");
  page.setAttribute("id", "app");
  page.setAttribute("class", "todoList");

  const content = document.createElement("div");
  content.setAttribute("id", "content");
  let response;
  try {
    response = await axios<TodoListResponse>(
      "http://localhost:33088/api/todolist"
    );

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("class", "mainContainer");

    const ul = document.createElement("ul");
    ul.setAttribute("class", "todolist");
    response.data?.items.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("todoItem");
      const todoInfoLink = document.createElement("a");
      todoInfoLink.setAttribute("href", `info?_id=${item._id}`);
      const title = document.createTextNode(item.title);
      const checkbox = document.createElement("input");
      checkbox.setAttribute("id", `checkImage${item._id}`);
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = item.done; // 체크박스의 초기상태값 설정

      //체크박스 커스텀 라벨
      const checkImage = document.createElement("label");
      checkImage.setAttribute("for", `checkImage${item._id}`);

      checkbox.addEventListener("click", async (event) => {
        event.preventDefault();

        item.done = !item.done as boolean;
        // if (item.done === true) {
        //   itemDone = false;
        // } else {
        //   itemDone = true;
        // }

        try {
          const response = await axios.patch(
            `http://localhost:33088/api/todolist/${item._id}`,
            {
              done: item.done as boolean,
            }
          );

          console.log(response.data.item.done);
        } catch (err) {
          console.error(err);
        }
      });

      //쩜쩜 버튼
      const todoSubButton = document.createElement("button");

      //쩜쩜 버튼 누르면 나오는 버튼리스트 (삭제/수정)
      const todoSubButtonList = document.createElement("ul");
      todoSubButtonList.className = "todoSubButtonList";
      todoSubButtonList.style.display = "none";

      // 수정 버튼
      const todoUpdate = document.createElement("li");
      const todoUpdateButton = document.createElement("button");
      const updateText = document.createTextNode("수정");
      todoUpdateButton.className = "todoUpdateButton";

      // 수정버튼 클릭 함수
      todoUpdateButton.addEventListener("click", async () => {
        linkTo(`/update?_id=${item._id}`);
        // response = await axios(
        //   `http://localhost:33088/api/todolist/${item._id}`
        // );
        // let {
        //   content = "",
        //   _id = "",
        //   title = "",
        //   done = false,
        // } = { ...response.data.item };
        // const updatePage = await TodoUpdate({
        //   _id: _id,
        //   updateTitle: title,
        //   updateContent: content,
        //   done: done,
        // });
        // document.querySelector("#todoList")!.replaceWith(updatePage);
      });

      // 삭제 버튼
      const todoDelete = document.createElement("li");
      const todoDeleteButton = document.createElement("button");
      const deleteText = document.createTextNode("삭제");
      todoDeleteButton.className = "todoDeleteButton";

      todoDelete.addEventListener("click", async function (event) {
        event.preventDefault();
        const id = item._id;
        response = await axios
          .delete(`http://localhost:33088/api/todolist/${id}`)
          .then(function () {
            // console.log(response);
            li.remove();
          })
          .catch(function (err) {
            console.log(err);
          });
      });

      // 첫 렌더링시 done상태값에 따라 todolist의 글자색이 변경되는 조건문
      if (item.done === true) {
        todoInfoLink.style.color = "#C8C8C8";
      } else {
        todoInfoLink.style.color = "black";
      }

      // 체크박스 토글기능 이벤트
      checkImage.addEventListener("click", function () {
        if (checkbox.checked === true) {
          checkbox.checked = false;
        } else {
          checkbox.checked = true;
        }
      });

      // 투두리스트 글자색이 변경되는 이벤트
      checkbox.addEventListener("click", function () {
        const done = item.done;

        if (!done) {
          todoInfoLink.style.color = "black";
        } else {
          todoInfoLink.style.color = "#C8C8C8";
        }
      });

      //쩜쩜 버튼 누르면 토글
      todoSubButton.addEventListener("click", function (event) {
        // 브라우저의 기본 동작 취소(<a> 태그 동작 안하도록)
        event.preventDefault();
        const display = todoSubButtonList.style.display;
        if (display === "none") {
          todoSubButtonList.style.display = "block";
        } else {
          todoSubButtonList.style.display = "none";
        }
      });

      //쩜쩜 아이콘
      const ellipsis = document.createElement("i");
      ellipsis.setAttribute("class", "fa-solid fa-ellipsis");

      todoInfoLink.addEventListener("click", async function (event) {
        // 브라우저의 기본 동작 취소(<a> 태그 동작 안하도록)
        event.preventDefault();
        // const infoPage = await TodoInfo({ _id: item._id });
        // document.querySelector("#todoList")!.replaceWith(infoPage);
        linkTo(`/info?_id=${item._id}`);
      });

      todoInfoLink.appendChild(title);
      //체크박스
      li.appendChild(checkbox);
      li.appendChild(checkImage);
      //투두 제목
      li.appendChild(todoInfoLink);
      //쩜쩜 버튼
      li.appendChild(todoSubButton);
      //쩜쩜 버튼 누르면 나오는 버튼리스트 (삭제/수정)
      li.appendChild(todoSubButtonList);
      mainContainer.appendChild(ul);

      todoSubButtonList.appendChild(todoUpdate);
      todoSubButtonList.appendChild(todoDelete);
      todoUpdate.appendChild(todoUpdateButton);
      todoDelete.appendChild(todoDeleteButton);

      todoUpdateButton.appendChild(updateText);
      todoDeleteButton.appendChild(deleteText);

      todoSubButton.appendChild(ellipsis);
      ul.appendChild(li);
    });
    content.appendChild(ul);

    const btnRegist = document.createElement("button");
    const btnTitle = document.createTextNode("");
    btnRegist.setAttribute("id", "addButton");
    btnRegist.setAttribute("aria-label", "등록 화면으로 이동버튼");
    //플러스 버튼
    const plusIcon = document.createElement("i");
    plusIcon.setAttribute("class", "fa-regular fa-plus");

    btnRegist.appendChild(btnTitle);
    btnRegist.appendChild(plusIcon);
    content.appendChild(btnRegist);

    btnRegist.addEventListener("click", () => {
      // const registPage = TodoRegist();
      // document.querySelector("#todoList")!.replaceWith(registPage);
      linkTo(`/regist`);
    });
  } catch (err) {
    const error = document.createTextNode("일시적인 오류 발생");
    content.appendChild(error);
  }

  page.appendChild(Header("Todo List"));
  page.appendChild(content);
  page.appendChild(Footer());
  return page;
};

export default TodoList;
