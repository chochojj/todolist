import styled from 'styled-components';
import rabbit from '../assets/imgs/rabbit.png'
import carrot from '../assets/imgs/carrot.png'

const Mainheader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(241,218,197,0.65);
  box-shadow: 0px 4px 4px rgba(0,0,0, 0.1);
  z-index: 5;

  -ms-user-select: none; 
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  
  ul{
    padding: 0;
    margin: 0;
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;
    z-index: 5;
  }
  img{
    width: 60px;
    z-index: 10;
    &:hover{
      cursor: pointer;
    }
  }
`

const Header = ({openside, setSide}) => {
  const openHandler = () => {
    // console.log(openside)
    setSide(!openside);
  };

  return (
    <Mainheader>
        <ul>
          <li><img src={rabbit} className='rabbit' alt='테마' /></li>
          <li><img onClick={openHandler} src={carrot} className='carrot' alt='메뉴' /></li>
        </ul>
    </Mainheader>
  );
};

export default Header;