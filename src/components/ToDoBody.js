import React, { useState } from 'react';
import styled from "styled-components";
import ToDoInput from './ToDoInput';
import ToDoItemList from './ToDoItemList';

const ToDoBodyContainer = styled.div`
  padding-top: 8px;
  padding-left: 25px;
  padding-right: 25px;

  .todo__list-done {
    margin-top: 3rem;
    margin-left: -25px;
    margin-right: -25px;
    padding-left: 25px;
    padding-right: 25px;
    background-color: #f7f7f7;
  }

  .todo__item-value-checked {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 22px;
    display: flex;
    align-items: center;
    text-decoration: line-through;
    color: #B7B7B7;
  }
`

function ToDoBody() {
  const [ valueList, setValueList] = useState([]);

  return (
    <ToDoBodyContainer>
      {/* 할 일 입력창 */}
      <ToDoInput 
        valueList={ valueList } 
        setValueList={ setValueList }
      />
      <hr />
      <div className='todo__list-container'>
        {/* 해야할 일 리스트 */}
        <div className='todo__list-yet'>
          <ToDoItemList 
            valueList={ valueList } 
            setValueList={ setValueList }
            checkedList={false}
          />
        </div>
        {/* 완료한 일 리스트 */}
        <div className='todo__list-done'>
          <ToDoItemList 
            valueList={ valueList } 
            setValueList={ setValueList }
            checkedList={true}
          />
        </div>
      </div>
    </ToDoBodyContainer>
  )
};

export default ToDoBody;

