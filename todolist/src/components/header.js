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
  ul{
    padding: 0;
    margin: 0;
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;
  }
  img{
    width: 60px;
    &:hover{
      cursor: pointer;
    }
  }
`

const Header = () => {
 

  return (
    <Mainheader>
        <ul>
          <li><img src={rabbit} className='rabbit' alt='테마' /></li>
          <li><img src={carrot} className='carrot' alt='메뉴' /></li>
        </ul>
    </Mainheader>
  );
};

export default Header;