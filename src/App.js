
import './App.css';
import Movie from './Movie';
import Header from './Header';
import movies from './movie.json';

function App() {
  return (
    <div className="App">

        <Header></Header>
     
       <div className='main'>
    {/* <Movie/>
    <Movie/>
    <Movie/> */}

                 {/* For Dynamic data Rendar we will use Map Object by Passing Props from Paresnts to cghild function, Bcz Child Componant will rendar */}
       {
        movies.map((element,index)=>{
          return(
            <Movie  title={element.Title} year={element.Year} img={element.Poster}    />

          )       
        })
       }
 
       </div>
  </div>
  );
}

export default App;
