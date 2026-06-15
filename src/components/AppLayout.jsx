import styled from "styled-components";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  background: linear-gradient(160deg, #1a2e2a 0%, #243d38 50%, #2d4f47 100%);
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Navigation />
      <Outlet />
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
