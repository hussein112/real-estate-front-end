const Properties = ({context}) => {
  return (
    <section id="latest-properties">  
        <h2 className="section-title center">{context == "search" ? "Best Matches" : "Latest Properties"}</h2>
        <div className="container cards d-flex flex-wrap align-items-center">
            <div className="card m-2">
                <div id="l-p-carousel1" className="carousel slide card-img-top" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="http://127.0.0.1:8000/storage/property/158/OvUf9Gd3tu8w57dt3fZpJjfCckLO77s4ZmvinqBQ.png" className="d-block w-100" alt="Property" loading="lazy" />
                        </div>
                        <div className="carousel-item ">
                            <img src="http://127.0.0.1:8000/storage/property/158/XsFtTOqWBMxq5XrRNSgaREkpFfjK3dJ6gFAcskh2.png" className="d-block w-100" alt="Property" loading="lazy" />
                        </div>
                        <div className="carousel-item ">
                            <img src="http://127.0.0.1:8000/storage/property/158/myAODBfh52TmjpnX83kp4TgjUJ5hA7pJtcdlTglk.png" className="d-block w-100" alt="Property" loading="lazy" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#l-p-carousel1" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#l-p-carousel1" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                                                        
                <div className="card-body">
                    <header className="card-head">
                        <a href="http://127.0.0.1:8000/properties/property/158" className="card-title">dasfasdf asd</a>
                        <div className="d-flex w-100 justify-content-between flex-wrap">
                            <h6 className="card-subtitle">
                                <a href="http://127.0.0.1:8000/properties/s/location/0" className="text-capitalize text-muted flex-center">
                                    <span>0</span>
                                </a>

                            </h6>
                            <h6 className="card-subtitle">
                                <a href="http://127.0.0.1:8000/properties/s/price/132" className="text-capitalize text-muted flex-center">
                                    <span>132.00</span>
                                </a>
                            </h6>
                            <h6 className="card-subtitle">
                                <a href="http://127.0.0.1:8000/properties/s/bedrooms-nb/1" className="text-capitalize text-muted flex-center">
                                    <span>1</span>
                                </a>
                            </h6>
                        </div>
                    </header>
                    <p className="card-text">asdf</p>
                    <div className="links d-flex w-100 justify-content-between flex-wrap">
                        <form className="card-link" action="http://127.0.0.1:8000/fav/add/158" method="post">
                            <input type="hidden" name="_token" value="GVyK1HwnRTetDVBEmyKLV2cVgvW8vD8RdZt5YpSs" />
                            <button type="button" data-bs-toggle="modal" data-bs-target="#loginModal" className="btn">
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Properties
