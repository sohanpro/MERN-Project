import React from 'react';

export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" id="carousel">
        <div className="carousel-item active">
          <img
            src="https://source.unsplash.com/random/?chowmein"
            className="d-block w-100"
            style={{ objectFit: 'cover', height: '800px' }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/?burger"
            className="d-block w-100"
            style={{ objectFit: 'cover', height: '800px' }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/?pizza"
            className="d-block w-100"
            style={{ objectFit: 'cover', height: '800px' }}
            alt="..."
          />
        </div>
        <div className="carousel-caption d-none d-md-block" style={{ zIndex: '10' }}>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-white bg-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
