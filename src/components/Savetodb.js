import axios from "axios";

const Savetodb = async (url, data, action) => {
  const result = await axios.patch(url, data);

  if (result.statusText === "OK") {
    return result;
  } else {
    return result.statusText;
  }
};

export default Savetodb;
