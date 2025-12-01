import styled from 'styled-components';
import logoImg from '../assets/logo_no_text_simple_final.png';

const StyledLogoImg = styled.img`
  width: 75px;
`;

const LogoTitle = styled.div`
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 1.8rem;
  color: #1b3c53;
`;

const LogoSubtitle = styled.div`
  font-family: 'Montserrat';
  font-weight: 600;
  color: #1b3c53;
  font-size: 1rem;
  margin-top: -10px;
  font-size: 1rem;
  margin-left: 7px;
`;

function Logo() {
  return (
    <div className="d-flex justify-content-center align-items-center gap-1">
      <div>
        <StyledLogoImg src={logoImg} className="img-fluid" />
      </div>
      <div className="d-flex justify-content-center align-items-left flex-column">
        <LogoTitle>Webvertize</LogoTitle>
        <LogoSubtitle>Web Development & Ads</LogoSubtitle>
      </div>
    </div>
  );
}

export default Logo;
