import { useState } from "react";

export default () => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true)

  const fetchData = async (text) => {
    try {
      const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`;
      const response = await fetch(URL);
      const parsedResponse = await response.json();
      setData(parsedResponse[0]);
      setLoading(false)
    } catch (e) {
      console.log(e);
    }
  };

  return [data, fetchData,loading];
};
