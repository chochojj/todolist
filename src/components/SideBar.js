import styled from 'styled-components';
import carrot_hover from '../assets/imgs/carrot_hover.png';
import { Link } from 'react-router-dom';

const Side = styled.nav`
  position: fixed;
  top: 70px;
  right: 0;
  width: 260px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 20px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  align-content: center;
  margin: 10px;
  padding: 10px;
  transition: all 0.3s ease-in-out;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  &:hover {
    img {
      visibility: visible;
    }

    span {
      color: #dd8351;
    }
  }

  img {
    width: 18px;
    margin: 0px 10px 0px 25px;
    visibility: hidden;
  }

  span {
    color: #c56c3a;
    font-weight: bold;
    font-size: 18px;
    margin-left: 20px;
  }
`;

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
      <StyledLink to="/">
        <img src={carrot_hover} className="carrot" alt="할 일 보기" />
        <span>할 일 보기</span>
      </StyledLink>
      <StyledLink to="/diary">
        <img src={carrot_hover} className="carrot" alt="내 일기장" />
        <span>내 일기장</span>
      </StyledLink>
      <StyledLink to="/schedule">
        <img src={carrot_hover} className="carrot" alt="달력 보기" />
        <span>달력 보기</span>
      </StyledLink>
      <StyledLink to="/madeby">
        <img src={carrot_hover} className="carrot" alt="만든 사람" />
        <span>만든 사람</span>
      </StyledLink>
    </Side>
  );
}

export default SideBar;
