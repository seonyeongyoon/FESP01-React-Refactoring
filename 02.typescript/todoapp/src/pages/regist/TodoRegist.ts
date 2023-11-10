// 할일 등록
import axios from "axios";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Nav from "../../layout/Nav";
import { linkTo } from "../../Router";

const TodoRegist = function (): HTMLElement {
  const page = document.createElement("div");
  page.setAttribute("id", "app");
  page.setAttribute("class", "regist");

  const content = document.createElement("div");
  content.id = "content";

  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  content.appendChild(wrapper);

  const form = document.createElement("form");
  form.className = "form";
  content.appendChild(form);

  //제목 입력창
  const titleBox = document.createElement("div");
  titleBox.className = "titleBox";
  const title = document.createElement("label");
  const titleText = document.createTextNode("제목");
  const titleInput = document.createElement("input");
  title.htmlFor = "title";
  titleInput.id = "title";
  titleInput.type = "text";
  titleInput.className = "titleInput";

  form.appendChild(titleBox);
  titleBox.appendChild(title);
  title.appendChild(titleText);
  titleBox.appendChild(titleInput);

  //상세 내용
  const detailBox = document.createElement("div");
  detailBox.className = "detailBox";
  const detail = document.createElement("label");
  const detailText = document.createTextNode("상세 내용");
  const detailInput = document.createElement("textarea");
  detail.htmlFor = "detail";
  detailInput.id = "detail";
  detailInput.className = "detailInput";

  form.appendChild(detailBox);
  detailBox.appendChild(detail);
  detail.appendChild(detailText);
  detailBox.appendChild(detailInput);

  // 추가하기 버튼
  const addButton = document.createElement("button");
  addButton.className = "addButton";
  const addText = document.createTextNode("추가하기");
  // addText.className = "addText";
  addButton.type = "button";
  addButton.appendChild(addText);
  form.appendChild(addButton);

  addButton.addEventListener("click", async () => {
    await axios
      .post<TodoItem>("http://localhost:33088/api/todolist", {
        title: titleInput.value,
        content: detailInput.value,
        done: false,
      })
      .then(function (response) {
        console.log(response);
        linkTo("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  page.appendChild(Nav());
  page.appendChild(Header("TodoApp 등록"));
  page.appendChild(content);
  page.appendChild(Footer());

  return page;
};

export default TodoRegist;
