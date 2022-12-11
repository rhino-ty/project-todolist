import axios from "axios";

export const listCreate = (url, data) => {
  axios
    .post(url, {
      data: JSON.stringify(data),
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

export const listRead = (url) => {
  axios
    .get(url)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

export const listUpdate = (url, id, data) => {
  axios.put(`${url}${id}`, { data: JSON.stringify(data) }).catch((error) => {
    console.error("Error", error);
  });
};

export const listDelete = (url, id) => {
  fetch.delete(`${url}${id}`).catch((error) => {
    console.error("Error", error);
  });
};
