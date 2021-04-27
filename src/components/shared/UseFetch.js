import { useState, useEffect } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [ data, setData] = useState([]);
  const [ dataInfo, setDataInfo ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError] = useState("");
  const [ numberOfPages, setNumberOfPages ] = useState(0);
  const [ itemCount, setItemCount ] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios(url);
        setData(response.data.results);
        setDataInfo(response.data.info);
        setNumberOfPages(response.data.info.pages);
        setItemCount(response.data.info.count);
      } catch(err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  // const getEpisodes = data.map(item => item.episode[0]);

  return { data, dataInfo, isLoading, error, numberOfPages, itemCount };
}

export default UseFetch;