import React from 'react'

const Home = () => {
  return (
    <div className='container'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="https://www.a2ztaxcorp.com/wp-content/uploads/2019/11/795202-telecomsector-013118.jpg" className="d-block w-100" alt="HIIIIIIIII"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://content.pymnts.com/wp-content/uploads/2021/11/5g-metaverse-technology.jpg" className="d-block w-100" alt="BYYYYYYYYEEEE"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://images.moneycontrol.com/static-mcnews/2022/06/6-5G-evolution-around-the-world.jpg?impolicy=website&width=1600&height=900" className="d-block w-100" alt="TYEEEEEEEEE"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home
