import React from "react";
import SHOP_DATA from "../shop/shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return <div>SHOPLIST</div>;
  }
}

export default ShopPage;
