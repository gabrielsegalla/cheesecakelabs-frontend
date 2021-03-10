import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar/Navbar'
import Enviroments from './enviroments'
import Home from './pages/Home/Home'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCategories = () =>{
    axios.get(`${Enviroments}/categories/`).then(res => {
      setCategories(res.data);
    })
  }

  const init = () =>{
    getCategories()
    axios.get(`${Enviroments}/news/`).then(res => {
        setIsLoading(false)
        console.log(res.data)
        setNews(res.data);
    })
  }

  useEffect(() => {
    init();
  }, []);


  return (
    <div >
      <Navbar Categories={categories}/>
      <div className="container">
        <Home News={news} isLoading={isLoading}/>
      </div>
    </div>
  );
}