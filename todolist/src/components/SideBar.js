import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Side = styled.nav`
  &{position: fixed;
  top: 70px;
  right: 0;
  width: 260px;
  height: 100vh;
  background-color: rgba(255,255,255,0.7);}
  box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);

  
`
const StyledLink  = styled(Link)`
`


//애니메이션으로 부드러운 효과를 주려면
//클릭 이벤트를 했을때 위치 이동을 시켜주는 css를 이벤트로 넣어야 할듯
//예시
//const [right, setRight] = useState(300);
// const animate = () => {
//   setHeight((right) => (right === 0 ? 300 : 0));
// };
// <Motion style={{ right: spring(right) }}>
// {({ right }) => (
//   <div style={{ ...styles.menu, right }}>
//     <p style={styles.selection}>Selection 1</p>
//     <p style={styles.selection}>Selection 2</p>
//   </div>
// )}
// </Motion>
function SideBar() {
  return (
    <Side>
        <StyledLink to="/">할 일 보기</StyledLink>
        <StyledLink to="/diary">내 일기장</StyledLink>
        <StyledLink to="/calendar">달력 보기</StyledLink>
        <StyledLink to="/madeby">만든 사람</StyledLink>
    </Side>
  );
}

export default SideBar;
