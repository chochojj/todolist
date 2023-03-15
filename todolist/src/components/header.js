import styled from 'styled-components';

const Mainheader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(241,218,197,0.65);
  box-shadow: 0px 4px 4px rgba(0,0,0, 0.1);
`

const Header = () => {
 

  return (
    <Mainheader>
        <nav>
          {/* <Link to="/">상품리스트</Link> */}
          {/* <Link to="/shoppingcart"> */}
        </nav>
    </Mainheader>
  );
};

export default Header;