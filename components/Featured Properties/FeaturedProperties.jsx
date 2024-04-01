import './Style.css'

const FeaturedProperties = () => {
  return (
    <section id="featured-properties">
        <h2 className="section-title center">Featured Properties</h2>
        <div className="container cards d-flex flex-wrap align-items-center">
            <div id="f-p-carousel1" className="carousel slide card-img-top" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#f-p-carousel1" data-bs-slide-to="0" className="" aria-label="Slide 0"></button>
                    <button type="button" data-bs-target="#f-p-carousel1" data-bs-slide-to="1" className="active" aria-label="Slide 1" aria-current="true"></button>
                    <button type="button" data-bs-target="#f-p-carousel1" data-bs-slide-to="2" className="" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#f-p-carousel1" data-bs-slide-to="3" className="" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src="http://127.0.0.1:8000/storage/property/148/AJWxVH0pMfHdh1NUfQ7WwkwVgwMbwsB9oDBJy3os.png" className="d-block w-100" alt="Property 1" loading="lazy" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4><a href="http://127.0.0.1:8000/properties/property/148">Updating Test</a></h4>
                            <p>test</p>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="http://127.0.0.1:8000/storage/property/179/cRnzAmxSMK0wtKWEgxvazUZ72YWOvJiEBcLK5Rmp.jpg" className="d-block w-100" alt="Property 1" loading="lazy" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4><a href="http://127.0.0.1:8000/properties/property/179">Testing images</a></h4>
                            <p>142</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="http://127.0.0.1:8000/storage/property/180/GLiA7PqOQo3sFZPejU0s1lw8N0UNV8ovyO4VikQB.png" className="d-block w-100" alt="Property 1" loading="lazy" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4><a href="http://127.0.0.1:8000/properties/property/180">property</a></h4>
                            <p>132</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="http://127.0.0.1:8000/storage/property/181/YEN9tJhb92l9AOU7Jqbex86g0hhBceMuZIFMOJWh.png" className="d-block w-100" alt="Property 1" loading="lazy" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4><a href="http://127.0.0.1:8000/properties/property/181">asdfasdfasdfasdfasdfasdf</a></h4>
                            <p>123</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedProperties
