import { PAGE_NAMES } from 'components/router/paths';
import { Container } from 'utils/Container';
import {
  HeaderBackground,
  HeaderNav,
  HeaderWrap,
  HeaderLink,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderBackground>
      <Container>
        <HeaderWrap>
          <HeaderNav>
            <HeaderLink to={PAGE_NAMES.homepage}>Home</HeaderLink>
            <HeaderLink to={PAGE_NAMES.movies}>Movies</HeaderLink>
          </HeaderNav>
        </HeaderWrap>
      </Container>
    </HeaderBackground>
  );
};
