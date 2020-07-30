import axios from "axios";
export default {
  worthbuyList(pageindex, shownum) {
    return axios(
      `/local/book-react-php/worthbuying.php?pageindex=${pageindex}&shownum=${shownum}`
    );
  },
  worthbuyingSearch(key) {
    return axios(`/local/book-react-php/worthbuyingSearch.php?key=${key}`);
  },
  addShoppingcar(
    goodsname,
    goodsprice,
    goodsimg,
    goodsid,
    buynum,
    goodsnum,
    times,
    userid,
    ischecked
  ) {
    return axios(
      `/local/book-react-php/addshoppingcar.php?goodsname=${goodsname}&goodsprice=${goodsprice}&goodsimg=${goodsimg}&
      goodsid=${goodsid}&buynum=${buynum}&goodsnum=${goodsnum}&times=${times}&userid=${userid}&ischecked=${userid}`
    );
  },
  shoppingcarlist(userid) {
    return axios(`/local/book-react-php/shoppingcarlist.php?userid=${userid}`);
  },
  shoppingcarlistDel(goodsid, userid) {
    return axios(
      `/local/book-react-php/shoppingcarlistDel.php?goodsid=${goodsid}&userid=${userid}`
    );
  },
  shoppingcarlistaddone(goodsid, userid, times) {
    return axios(
      `/local/book-react-php/shoppingcaraddone.php?goodsid=${goodsid}&userid=${userid}&times=${times}`
    );
  },
  shoppingcarlistreduceone(goodsid, userid, times) {
    return axios(
      `/local/book-react-php/shoppingcarreduceone.php?goodsid=${goodsid}&userid=${userid}&times=${times}`
    );
  },
  updateischecked(id, ischecked) {
    return axios(
      `/local/book-react-php/updateischecked.php?id=${id}&ischecked=${ischecked}`
    );
  },
  updateischeckedall(ischecked) {
    return axios(
      `/local/book-react-php/updateischeckedall.php?ischecked=${ischecked}`
    );
  },
  addorder(userid,goodsid,goodsname,goodsprice,goodsimg,buynum,goodsnum,buytimes,type,returngoods) {
    return axios(
      `/local/book-react-php/addorder.php?userid=${userid}&goodsid=${goodsid}&goodsname=${goodsname}&goodsprice=${goodsprice}
      &goodsimg=${goodsimg}&buynum=${buynum}&goodsnum=${goodsnum}&buytimes=${buytimes}&type=${type}&returngoods=${returngoods}`
    );
  },
};
