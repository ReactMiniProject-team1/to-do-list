import React from 'react';
import styled from "styled-components";
import ToDoItem from './ToDoItem';

const ToDoListContainer = styled.div`
  .todo__list-ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
`

function ToDoItemList({ valueList, setValueList, checkedList }) {
  return (
    <ToDoListContainer>
      <ul className="todo__list-ul"> { 
        valueList && valueList.map((todoItem) => {
          if(todoItem.deleted) return null;
          if(checkedList !== todoItem.checked) return null;

          return (
            <ToDoItem 
              key={ todoItem.id }
              todoItem={ todoItem }
              valueList={ valueList }
              setValueList={ setValueList } 
            />
          )
        })
      }
      </ul>
    </ToDoListContainer>
  )
};

export default ToDoItemList;