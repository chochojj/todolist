import React from 'react';
import styled from 'styled-components';

const Made = styled.div`
    width: 400px;
    height: 500px;
    background-color: rgba(255,255,255,0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0px 0px 5px rgba(0,0,0, 0.1);
`

function Madeby() {
  return (
    <Made>
      암것두 없어용
    </Made>
  );
}

export default Madeby;
