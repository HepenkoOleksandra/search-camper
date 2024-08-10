import axios from "axios";

const instance = axios.create({
    baseURL: "https://66b5ff07b5ae2d11eb6584fa.mockapi.io",
    headers: {},
    params: {
      // per_page: 4,
    }
});

export const apiGetAllCampers = async () => {
  const {data} = await instance.get("/adverts", {
    params: {
      // page,
    }
  })
// console.log(data.results);
  return data;
};

export const apiGetCamperById = async (camperId) => {
    const {data} = await instance.get(`/adverts/${camperId}`);
// console.log("1", data);
  return data;
};