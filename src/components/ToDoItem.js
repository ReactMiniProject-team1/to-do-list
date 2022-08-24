import React from 'react';
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const ToDoItemContainer = styled.div`
  .todo__list-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  
  .todo__item-checkbox {
    width: 24px;
    height: 24px;
  }

  .todo__item-checkbox, progress {
    accent-color: #454b55;
  }

  .todo__item-checkbox:hover {
    cursor: pointer;
  }

  .todo__item-list {
    display: flex;
    align-items: center;
  }

  .todo__item-value {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 22px;
    display: flex;
    align-items: center;
  }
  
  .todo__item-del-btn {
    border: none;
    width: 24px;
    height: 24px;
    background-color: inherit;
    color: #454b55;
  }
  
  .todo__item-del-btn:hover {
    cursor: pointer;
  }
`

function ToDoItem({ todoItem, valueList, setValueList }) {
  const onChangeCheckBox = () => {
    const nextValueList = valueList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }))
    setValueList(nextValueList);
  };

  const onClickDeleteButton = () => {
    const nextValueList = valueList.map((item) => ({
      ...item,
      deleted: item.id === todoItem.id ? true : item.deleted,
    }))
    setValueList(nextValueList);
  };

  // =============================================
  // 취소|삭제 선택하는 모달창 // 미완성
  // =============================================
  // const onClickModalButton = () => {
    
  // }

  return (
    <ToDoItemContainer>
      <li className="todo__list-wrapper">
        <div className="todo__item-list">
          <input 
            className="todo__item-checkbox" 
            type="checkbox" 
            checked={ todoItem.checked } 
            onChange={ onChangeCheckBox } 
          />
          <span className={
            `todo__item-value ${todoItem.checked ? 
            'todo__item-value-checked' : ''}`}
          >
          { todoItem.value }
          </span>
        </div>
        <div className="todo__item-del">
          <button className="todo__item-del-btn" onClick={ onClickDeleteButton } type="button">
            <AiOutlineClose size="20" />
          </button>
        </div>
      </li>
    </ToDoItemContainer>
  )
};

export default ToDoItem;