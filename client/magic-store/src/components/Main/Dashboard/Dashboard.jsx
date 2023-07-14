import React, {useEffect, useState} from "react";
import axios from 'axios';
import Searcher from "./Searcher/Searcher";

const Dashboard = () => {

  const [nameCard, setNameCard] = useState("");




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/card`);
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData()
  }, [nameCard]);
      

  return <div><Searcher setNameCard={setNameCard}/></div>;
};

export default Dashboard;