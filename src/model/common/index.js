import axios from "axios";

export default {
  preferenceList() {
    return axios(
      "/cart/cart.php?action=cart_ad_and_recommend&productIds=&img_size=h"
    );
  },
};
