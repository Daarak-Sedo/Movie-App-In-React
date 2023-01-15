import React from 'react'

const Movie = (props) => {
  return (
    <>
    <div className='movie'>
       {/* <img src='https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_.jpg' alt=''  /> */}
       {/* <p>Star Wars: The Last jedi</p>
       <p>Year:2007</p> */}   
       
                           {/* For Dynamic data Rendar we will use Map by Passing Props from Paresnts to cghild function, Bcz Child Componant will rendar */}
 
        <img src={props.img}  />       
       <p>{props.title}</p>
       <p>Year:{props.year}</p>
    </div>
      
    </>
  )
}

export default Movie
