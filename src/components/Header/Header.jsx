import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Menu from "../Menu/Menu";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <>
      <Navigation />
      <AuthNavigation />
      <Menu />
    </>
  );
};

export default Header;
