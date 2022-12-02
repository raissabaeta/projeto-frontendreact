import { HeaderContainer } from "./Header.styled";
import spaceShip from "../../assets/spaceship.png"
import searchIcon from "../../assets/search.svg"
import productsIcon from "../../assets/planeta.png"
import cartIcon from "../../assets/cart.svg"



function Header(props) {

    const { goToCartScreen,
        goToProductsScreen, } = props

    return (
      <HeaderContainer>
       <div className="logo-icon">
        <img src={spaceShip} alt="icon spaceship"/>
       </div>
       <div className="search">
            <input placeholder="Busque seu planeta"/>
            <button>
                <img src={searchIcon} alt="Search icon" />
            </button>
       </div>
       <div className="button-group">
        <button onClick={goToProductsScreen}>
            <img src={productsIcon} alt="products icon"/>
        </button>

        <button onClick={goToCartScreen}>
            <img src={cartIcon} alt="cart icon"/>
        </button>
       </div>
       
      </HeaderContainer>
    );
  }
  
  export default Header;
  