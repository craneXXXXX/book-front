import axios from "axios";

export default {
  classifyTheBook() {
    return axios(
      "/search/ddcategory.php?action=get_content&title=%E5%9B%BE%E4%B9%A6&pageid=712231"
    );
  },
  classifyChildren() {
    return axios(
      "/search/ddcategory.php?action=get_content&title=%E7%AB%A5%E4%B9%A6&pageid=712675"
    );
  },
  classifyOldBook() {
    return axios(
      "/search/ddcategory.php?action=get_content&title=%E6%97%A7%E4%B9%A6%2F%E6%8B%8D%E5%8D%96&pageid=712652"
    );
  },
  classifyElectronicBook() {
    return axios(
      "/search/ddcategory.php?action=get_content&title=%E7%94%B5%E5%AD%90%E4%B9%A6&pageid=712239"
    );
  },
  classifyPhone() {
    return axios(
      "/search/ddcategory.php?action=get_content&title=%E6%89%8B%E6%9C%BA%E6%95%B0%E7%A0%81&pageid=713343"
    );
  },
  classifyWomanDress() {
    return axios(
      "/search/ddcategory.php?action=get_content&title=%E5%A5%B3%E8%A3%85&pageid=713046"
    );
  },
  classifyTwoShoe() {
    return axios(
      "/search/ddcategory.php?action=get_content&title=%E7%94%B7%E5%A5%B3%E9%9E%8B&pageid=713178"
    );
  },
  classifyFood() {
    return axios(
      "/search/ddcategory.php?action=get_content&title=%E9%A3%9F%E5%93%81%E7%94%9F%E9%B2%9C&pageid=713260"
    );
  },
  classifyPen() {
    return axios(
      "/search/ddcategory.php?action=get_content&title=%E5%88%9B%E6%84%8F%E6%96%87%E5%85%B7&pageid=712655"
    );
  },
  classifyOA() {
    return axios(
      "/search/ddcategory.php?action=get_content&title=%E7%94%B5%E8%84%91%E5%8A%9E%E5%85%AC&pageid=713359"
    );
  },
  classifySport() {
    return axios(
      "/search/ddcategory.php?action=get_content&title=%E8%BF%90%E5%8A%A8%E6%88%B7%E5%A4%96&pageid=713189"
    );
  },
};
