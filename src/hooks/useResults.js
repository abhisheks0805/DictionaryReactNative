import { useState } from "react";
import { useToast } from "react-native-toast-notifications";

export default () => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true)
  const [noDataFound,setNoDataFound] = useState("")
  const toast = useToast();

  const fetchData = async (text) => {
    try {
      const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`;
      const response = await fetch(URL);
      const parsedResponse = await response.json();
      if(parsedResponse[0]==undefined){
        toast.show("Not Found");
        return
      }
      setData(parsedResponse[0]);
      setLoading(false)
    } catch (e) {
      console.log(e);
    }
  };

  return [data, fetchData,loading];
};
