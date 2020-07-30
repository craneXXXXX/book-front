import axios from "axios";
import qs from "qs";
export default {
  login(username, userpwd, usertype) {
    return axios({
      url: "/local/book-react-php/login.php",
      method: "post",
      data: qs.stringify({
        username,
        userpwd,
        usertype,
      }),
    });
  },
  register(username, userpwd, usertype) {
    return axios({
      url: "/local/book-react-php/register.php",
      method: "post",
      data: qs.stringify({
        username,
        userpwd,
        usertype,
      }),
    });
  },
  searchlogistics(userid) {
    return axios(`/local/book-react-php/searchlogistics.php?userid=${userid}`);
  },
  addlogistics(userid, username, address, usertel, times, def) {
    return axios(
      `/local/book-react-php/addlogistics.php?userid=${userid}&username=${username}&address=${address}&usertel=${usertel}&times=${times}&def=${def}`
    );
  },
  updatelogistics(id, username, address, usertel, times) {
    return axios(
      `/local/book-react-php/updatelogistics.php?id=${id}&username=${username}&address=${address}&usertel=${usertel}&times=${times}`
    );
  },
  updatelogisticsdef(id) {
    return axios(`/local/book-react-php/updatelogisticsdef.php?id=${id}`);
  },
  dellogistics(id) {
    return axios(`/local/book-react-php/dellogistics.php?id=${id}`);
  },
  searchorder(userid) {
    return axios(`/local/book-react-php/searchorder.php?userid=${userid}`);
  },
  searchorderbyid(id) {
    return axios(`/local/book-react-php/searchorderbyid.php?id=${id}`);
  },
  searchorderlive(userid, buytimes) {
    return axios(
      `/local/book-react-php/searchorderlive.php?userid=${userid}&buytimes=${buytimes}`
    );
  },
  updateorderaddress(orderid, address, paytimes) {
    return axios(
      `/local/book-react-php/updateorderaddress.php?orderid=${orderid}&address=${address}&paytimes=${paytimes}`
    );
  },
  searchorderpay(userid) {
    return axios(`/local/book-react-php/searchorderpay.php?userid=${userid}`);
  },
  updateordertypereceive(id, type, receivetimes) {
    return axios(
      `/local/book-react-php/updateordertypereceive.php?id=${id}&type=${type}&receivetimes=${receivetimes}`
    );
  },
};
