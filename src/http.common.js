import axios from "axios";

const token = `39df84d78be3f61e4bd227d04ea797d9e3ea34256ac95f626834e974dd143593`;
export default axios.create({
  baseURL: "https://gorest.co.in/public/v2",
  headers: {
    "Content-type": "application/json",
    // eslint-disable-next-line prettier/prettier
    "Authorization": `Bearer ${token}`,
  },
});
