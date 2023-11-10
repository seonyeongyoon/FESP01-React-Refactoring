// 할일 수정
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Nav from "../../layout/Nav";
import axios from "axios";
import { linkTo } from "../../Router";


const TodoUpdate = async function (): Promise<HTMLElement> {
  // 쿼리스트링 값 가져오기
  const searchParam = (key: string): string | null => {
    return new URLSearchParams(location.search).get(key);
  }
  const _id = searchParam('_id');

  const page = document.createElement("div");
  page.setAttribute("id", "app");
  page.setAttribute("class", "update");

  const content = document.createElement("div");
  content.id = "content";

  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  content.appendChild(wrapper);

  const form = document.createElement("form");
  form.className = "form";
  wrapper.appendChild(form);

  const response = await axios<TodoResponse>(`http://localhost:33088/api/todolist/${_id}`);
  const data = response.data.item;

  const updateTitle = data.title;
  const updateContent = data.content;
  const done = data.done;

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
  titleInput.value = updateTitle;

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
  detailInput.value = updateContent;

  form.appendChild(detailBox);
  detailBox.appendChild(detail);
  detail.appendChild(detailText);
  detailBox.appendChild(detailInput);

  // 실행 여부
  const checkBox = document.createElement("div");
  checkBox.className = "executionCheck";
  const check = document.createElement("label");
  const checkText = document.createTextNode("실행여부");
  const checkInput = document.createElement("input");
  checkInput.type = "checkbox";

  form.appendChild(checkBox);
  checkBox.appendChild(check);
  check.appendChild(checkText);
  checkBox.appendChild(checkInput);
  checkInput.checked = done;

  // 체크박스 토글기능;
  checkInput.addEventListener("click", (e: MouseEvent) => {
    let checked = (e.target as HTMLInputElement).checked;
    if (!checked) {
      checked = true;
    } else {
      checked = false;
    }
  });

  // 수정하기 버튼
  const addButton = document.createElement("button");
  addButton.className = "addButton";
  addButton.type = "button";
  const addText = document.createTextNode("수정 완료하기");
  // addText.className = "addText";
  addButton.appendChild(addText);
  form.appendChild(addButton);

  try {
    addButton?.addEventListener("click", async() => {
      const body = {
        title: titleInput.value,
        content: detailInput.value,
        done: checkInput.checked,
      }
      await axios.patch<TodoResponse>(`http://localhost:33088/api/todolist/${_id}`, body).then((response) => {
        console.log(response);
        linkTo(`/info?_id=${_id}`);
      }).catch((error) => {
        console.log(error);
      })
    });
  } catch(error) {
    console.error(error);
  }

  // 삭제하기 버튼
  const deleteButton = document.createElement("button");
  deleteButton.className = "deleteButton";
  deleteButton.type = "button";
  const deleteText = document.createTextNode("삭제하기");
  // deleteText.className = "deleteText";
  deleteButton.appendChild(deleteText);
  form.appendChild(deleteButton);

  deleteButton?.addEventListener("click", async () => {
    await axios
      .delete(`http://localhost:33088/api/todolist/${_id}`)
      .then(function (response) {
        console.log(response);
        linkTo(`/`);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  page.appendChild(Nav());
  page.appendChild(Header("TodoApp 수정"));
  page.appendChild(content);
  page.appendChild(Footer());

  return page;
};
export default TodoUpdate;
