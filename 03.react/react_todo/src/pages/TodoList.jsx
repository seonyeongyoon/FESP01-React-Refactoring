import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function TodoList() {
  return (
    <>
      <div className="content">
        <ul className="todolist"></ul>
        <button
          className="bg-gray-400"
          id="addButton"
          aria-label="등록 화면으로 이동버튼"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </>
  );
}

export default TodoList;
