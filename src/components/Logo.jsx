import styled from 'styled-components';
import logoLightImg from '../assets/basic-business-logo-light.svg';

const StyledLogoImg = styled.img`
  width: 200px;
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
        <StyledLogoImg src={logoLightImg} className="img-fluid" />
      </div>
    </div>
  );
}

export default Logo;
