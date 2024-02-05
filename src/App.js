import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from 'react';
import { GetWithToken } from './api/crud';

function App() {
  const [filmler, setFilmler] = useState([]);

  useEffect(() => {
    getFilms();
  }, [])

  const getFilms = async () => {
    const myFilmList = await GetWithToken("https://api.themoviedb.org/3/movie/top_rated?language=tr-TR&page=1").then(x => { return x.data });
    console.log(myFilmList)
    setFilmler(myFilmList.results);
  }
  return (
    <div className="App">
      <div className='navbar navbar-expand-md' style={{ backgroundColor: "#222831" }}>
        <div className='container'>
          <a className="navbar-brand headerText" href="#" style={{ color: "white" }}>MyWebsite</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active headerText" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link headerText" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle headerText" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled headerText" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success headerText" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
      <div className='body d-flex flex-wrap gap-3 container my-3 justify-content-center'>
        {
          filmler.map((film, index) =>
            <div className="card mt-3 col-lg-3" key={index}>
              <img src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ height: "45px" }}>{film.title}</h5>
                <p className="card-text" style={{ height: "45vh", overflowY: "auto" }}>{film.overview}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          )
        }
      </div>
      <div className='myFooter w-100 d-flex justify-content-center align-items-center' style={{ height: "8vh", backgroundColor: "#222831" }}>
        <span className='headerText me-1'>Developed By</span>
        <a href="https://www.linkedin.com/in/piyaremen/" style={{color: "#9DB2BF", textDecorationLine: "none"}}>Piyar Emen</a>
      </div>
    </div>
  );
}

export default App;
