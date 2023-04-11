import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import styled from 'styled-components';

const Monthly = styled.div`
  width: 800px;
  height: 500px;
  background-color: rgba(255,255,255,0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(0,0,0, 0.1);

  .react-calendar { 
    width: 80%;
    height: 100%;
    margin-top: 20px;
    background-color: transparent;
    border: none;
    }
    .react-calendar__navigation button {
      color: rgba(130, 130, 130, 1);
      font-weight: bold;
      min-width: 44px;
      background: none;
      font-size: 1em;
      margin-top: 8px;
    }
    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
      background-color: #f8f8fa;
    }
    .react-calendar__navigation button[disabled] {
      background-color: #f0f0f0;
    }
    abbr[title] {
      text-decoration: none;
    }
    /* .react-calendar__month-view__days__day--weekend {
    color: #d10000;
    } */
    .react-calendar__tile{
      height: 70px;
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
      background: rgba(254, 194, 194, 0.15);
      color: rgba(130, 130, 130, 1);
      border-radius: 6px;
      }
    .react-calendar__tile--now {
    background: rgba(254, 194, 194, 0.15);
    border-radius: 6px;
    font-weight: bold;
    color: rgba(130, 130, 130, 1);
    }
    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
    background: rgba(254, 194, 194, 0.15);
    border-radius: 6px;
    font-weight: bold;
    color: rgba(130, 130, 130, 1);
    }
    .react-calendar__tile--hasActive:enabled:hover,
    .react-calendar__tile--hasActive:enabled:focus {
    background: rgba(254, 194, 194, 0.15);
    }
    .react-calendar__tile--active {
    background: rgba(254, 194, 194, 0.15);
    border-radius: 6px;
    font-weight: bold;
    color: white;
    }
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
    background: rgba(254, 194, 194, 1);
    color: white;
    }
    .react-calendar--selectRange .react-calendar__tile--hover {
      background-color: rgba(254, 194, 194, 1);
    }
    .react-calendar__tile--range {
      background: rgba(254, 194, 194, 1);
      color: rgba(130, 130, 130, 1);
      border-radius: 0;
    }
    .react-calendar__tile--rangeStart {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      background:rgba(254, 194, 194, 0.3);
      color: rgba(130, 130, 130, 1);
    }
    .react-calendar__tile--rangeEnd {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      background: rgba(254, 194, 194, 0.3);
      color: rgba(130, 130, 130, 1);
    }

`;
    

function Schedule() {
  const [diaries, setDiaries] = useState(() => {
    const storedDiaries = localStorage.getItem('diaries');
    return storedDiaries ? JSON.parse(storedDiaries) : [];
  });
  const [value, onChange] = useState(new Date());

  function getDiary(date) {
    return diaries.find(diary => diary.date === formatDate(date));
  }

  function formatDate(date) {
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
  }


  return (
    <Monthly
      // renderDay 함수를 업데이트하여 해당 날짜에 일치하는 일기를 표시
      renderDay={(date, _, modifiers) => {
        const diary = getDiary(date);
        const hasDiary = !!diary;
        return (
          <div
            style={{ backgroundColor: hasDiary ? 'yellow' : 'transparent' }}
            {...modifiers}
          >
            {hasDiary && (
              <div>
                <h3>{diary.title}</h3>
                <p>{diary.content}</p>
              </div>
            )}
            {date.getDate()}
          </div>
        );
      }}
    >
      <Calendar onChange={onChange} value={value} />
    </Monthly>
  );
}


export default Schedule;