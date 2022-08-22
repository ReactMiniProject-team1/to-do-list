import React, { useState, useRef, useEffect} from "react"
import styled from "styled-components"

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .todo__input-box {
    width: 18rem;
    height: 2rem;
    font-size: 18px;
    border: none;
    box-sizing: border-box;
    color: #454b55;
  }

  .todo__input-box:focus {
    outline: none;
  }

  input::placeholder {
    color: #b7b7b7;
  }
`

function ToDoInput({ valueList, setValueList }) {
  let [ value, setValue ] = useState('');
  let inputRef = useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value)
  }; 

  const intoTheList = (e) => {
    const nextValueList = valueList.concat({
      id: valueList.length, 
      value,
      checked: false,
      deleted: false,
    });
    setValueList(nextValueList);

    setValue('');
    inputRef.current.focus();
  };
  // =============================================
  // 한글 두번 입력됨, 조건식 크게 의미 없음. 최대 골칫거리
  // =============================================
  const onKeyDownInput = (e) => {
    if (e.key === '') {
      console.log('빈칸')
      return;
    } else if (e.key === 'Return') { 
      console.log('백스페이스')
      return;
    } else if (e.key !== 'Enter') {
      console.log('엔터아님')
      return;
    } else if (e.isComposing) { 
      console.log('컴포징')
      return;
    } else if (e.key === 'Enter') {
      e.preventDefault();
      intoTheList(e);
    }
  };

  return (
    <InputContainer>
      <input 
        className="todo__input-box" 
        ref={ inputRef }
        value={ value } 
        type="text"
        name="todoItem" 
        placeholder="할일을 입력해 주세요."
        onChange={ onChangeInput }
        onKeyDown={ onKeyDownInput }
      />
    </InputContainer>
  );
}

export default ToDoInput;