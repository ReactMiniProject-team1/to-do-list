import React from "react"
import styled from "styled-components"

const HeadWrapper = styled.div`
  padding-top: 32px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .today {
    font-size: 24px;
    font-weight: 700;
  }

  .date {
    font-size: 18px;
  }
`

function ToDoHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    // year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  return (
    <HeadWrapper>
      <div className="today">할 일</div>
      <div className="date">
        { dateString + '\u00a0' + dayName}
      </div>
    </HeadWrapper>
  );
}

export default ToDoHead;