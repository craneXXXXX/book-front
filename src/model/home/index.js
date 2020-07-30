import axios from 'axios';

export default {
  secondkill() {
    return axios("/api/index.php?floor_pageid=147903_2&seq=2&action=index_floor&preview_time=0");
  }
};
