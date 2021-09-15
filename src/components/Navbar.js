import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import { mobile } from '../responsive';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  font-family: 'Nunito Sans', sans-serif;
  ${mobile({ height: '50px' })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}

  ::focus {
    border: none;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = () => {
  let history = useHistory();

  // redirecting fns
  const redirectToLogin = () => {
    console.log('user will be redirected to login page');
    history.push('/login');
  };

  const redirectToCart = () => {
    console.log('user will be redirected to Cart');
    history.push('/cart');
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input />
          </SearchContainer>
        </Left>
        <Center>
          {/* Logo */}
          <Logo>V</Logo>
        </Center>
        <Right>
          {/* menu items  */}
          <MenuItem>
            {' '}
            <PersonIcon onClick={redirectToLogin} />{' '}
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary' onClick={redirectToCart}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
