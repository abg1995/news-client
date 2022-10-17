import './App.css';
import { Route, Routes } from 'react-router-dom';
import News from './views/News';
import Archived from './views/Archived';
import CreateNews from './views/CreateNews.jsx'
import { useState, useEffect} from 'react';
import axios from "axios";
import Navegador from "./components/Navbar"
import NewsDetail from './views/NewsDetail';
import ArchivedDetails from './views/ArchivedDetails';

function App() {

const [news, setNews] = useState(null);
const [archived, setArchived] = useState(null);

useEffect(() => {
  getNews();
  getArchived();
}, []);


const getNews = () => {

  axios.get('http://localhost:5005/api/news')
    .then((response) => {
      setNews(response.data);
    
    })
    .catch((e) => console.log("error getting News from api", e));
};


const getArchived = () => {

  axios.get('http://localhost:5005/api/archived')
    .then((response) => {
      setArchived(response.data)
      console.log(response.data)
    })
    .catch((e) => console.log("error getting Archived news from api",e))
}

  return (
    <div className="App">
   
   <Navegador />
   <h1>Welcome to the NEWS site</h1>


   <Routes>
     <Route path='/news' element={<News getNews={getNews} news={ news }/>} />
     <Route path='/news/:newsId' element={<NewsDetail getNews={getNews} news={ news }/>} />
     <Route path='/archived' element={<Archived archived={ archived } getArchived = {getArchived}/>} />
     <Route path='/archived/:archivedId' element={<ArchivedDetails archived={ archived } getArchived = {getArchived}/>} />
     <Route path='/news/post' element={<CreateNews getNews = { getNews }/>} />  
     {/* revisar ruta para crear posts news */}

   </Routes>
    </div>
  );
}

export default App;
