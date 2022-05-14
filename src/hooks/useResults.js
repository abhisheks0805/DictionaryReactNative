import { useState } from "react";

export default () => {
  const [data, setData] = useState([]);

  const fetchData = async (text) => {
    try {
      const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`;
      const response = await fetch(URL);
      const parsedResponse = await response.json();
      setData(parsedResponse[0]);
    } catch (e) {
      console.log(e);
    }
  };

  return [data, fetchData];
};
