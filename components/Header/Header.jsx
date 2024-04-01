"use client"

import './style.css'
import Navbar from '../Navbar/Navbar'
import { useState, useRef } from 'react'

const Header = () => {
    const min = useRef();
    const max = useRef();
    const userAuthenticated  = true;
    const [filter, setFilter] = useState(false);
    const [maxPrice, setMaxPrice] = useState(1);
    const [minPrice, setMinPrice] = useState(1);
    const [maxBedrooms, setMaxBedrooms] = useState(0);
    const [minBedrooms, setMinBedrooms] = useState(0);
    const [propertyType, setPropertyType] = useState(1);

    const handleClickMin = (newValue, newPosition) => {
        min.current.style.left = `calc(${newValue}% + ${newPosition}px)`
    };
    const handleClickMax = (newValue, newPosition) => {
        max.current.style.left = `calc(${newValue}% + ${newPosition}px)`
    };

    function setStyle(range, target){
        const newValue = Number( (range - 0) * 100 / (30 - 0) );
        const newPosition = 10 - (newValue * 0.2);
    
        if(target == "min"){
            handleClickMin(newValue, newPosition)
        }else{
            handleClickMax(newValue, newPosition);
        }
    }

    function rangeChanged(e){
        let value = e.target.value;
        switch (e.target.id) {
            case "minbedrooms":
                setMinBedrooms(value);
                setStyle(value, "min");
                break;
            case "maxbedrooms":
                setMaxBedrooms(value);
                setStyle(value, "max");
                break;
            default:
                break;
        }
    }


    function priceChanged(e){
        let value = e.target.value;
        switch (e.target.id) {
            case "minPrice":
                setMinPrice(value);
                break;
            case "maxPrice":
                setMaxPrice(value);
                break;
            default:
                break;
        }
    }




    const handleSearch = () => {
        // For easness, add default values in order to differentiate 
        // between advanced search and basic search in the backend.
        if(! filter){
            setMaxPrice(-1);
            setMinPrice(-1);
            setMaxBedrooms(0);
            setMinBedrooms(0);
            setPropertyType(0);
        }
    }

    return (
    <header className="page-header">
        <Navbar />
        <div className="search">
            <div className="container">
                <form method="get" className="p-2 w-100">
                    {/* Start Basic Search */}
                    <div className="basic-search d-flex flex-column flex-lg-row p-2">
                        <div className="search-for flex flex-column flex-lg-row">
                            <label htmlFor="searchfor" className="form-label m-2">For</label>
                            <select name="dealtype" id="searchfor" className="form-select m-2">
                                <option value="1">Sell</option>
                                <option value="2">Rent</option>
                            </select>
                        </div>

                        <div className="location flex flex-column flex-lg-row">
                            <label htmlFor="location" className="form-label m-2">Where</label>
                                <select name="location" id="location" className="form-select m-2">
                                    <option value="1">1</option>
                                    <option value="0">0</option>
                                    <option value="231">231</option>
                                    <option value="dsfa">Dsfa</option>
                                    <option value="dsaf">Dsaf</option>
                                    <option value="sdaf">Sdaf</option>
                                    <option value="sdalk;fh">Sdalk;fh</option>
                                    <option value="asdf">Asdf</option>
                                    <option value="asdfsadf">Asdfsadf</option>
                                    <option value="Beirut">Beirut</option>
                                    <option value="sadfasdf">Sadfasdf</option>
                                    <option value="234">234</option>
                                    <option value="Beirtu">Beirtu</option>
                                    <option value="132">132</option>
                                    <option value="123">123</option>
                                    <option value="1asdfasdf">1asdfasdf</option>
                                    <option value="sadf">Sadf</option>
                                    <option value="asdfasdf">Asdfasdf</option>
                                    <option value="Tyre">Tyre</option>
                                    <option value="21">21</option>
                                    <option value="2">2</option>
                                </select>
                        </div>


                        <div className="btns flex flex-wrap">
                            <button onClick={() => setFilter(true)} id="filter-search" className="btn btn-danger m-2" type="button" data-bs-toggle="collapse" data-bs-target="#filters" aria-controls="filters" aria-expanded="false" aria-label="Toggle Advanced Search">
                                Filter
                            </button>
                            <button 
                                id="search-btn" 
                                type="submit" 
                                className="btn btn-primary mx-2"
                                onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                    {/* End Basic Search */}
                    
                    {/* Start Advanced Search */}
                    <div id="filters" className="advanced-search collapse p-2">
                        <div className="flex flex-column flex-lg-row">
                            <div className="flex flex-column flex-lg-row">
                                <label htmlFor="propertyType" className="form-label m-2">Type</label>
                                <select name="propertyType" id="propertyType" className="form-select m-2" value={propertyType} onChange={() => setPropertyType(1)}>
                                    <option value="1">Appartement</option>
                                    <option value="3">Challet</option>
                                    <option value="2">Villa</option>
                                </select>
                            </div>
                            <div className="flex flex-column flex-lg-row">
                                <label htmlFor="minbedrooms" className="form-label m-2">Min Bedrooms</label>
                                <div className="range-wrap center">
                                    <div className="range-value" id="rangeMin" ref={min}><span>{minBedrooms}</span></div>
                                    <input onChange={rangeChanged} value={minBedrooms} type="range" name="minbedrooms" id="minbedrooms" className="form-range m-2" min="0" max="30" step="1" />
                                </div>
                            </div>
                            <div className="flex flex-column flex-lg-row m-2">
                                <label htmlFor="maxbedrooms" className="form-label m-2">Max Bedrooms</label>
                                <div className="range-wrap center">
                                    <div className="range-value" id="rangeMax" ref={max}><span>{maxBedrooms}</span></div>
                                    <input value={maxBedrooms} onChange={rangeChanged} type="range" name="maxbedrooms" id="maxbedrooms" className="form-range m-2" min="0" max="30" step="1" />
                                </div>
                            </div>
                            <div className="flex flex-column flex-lg-row m-2">
                                <input value={minPrice} onChange={priceChanged} type="number" name="minprice" id="minPrice" className="form-control m-2" placeholder="Min Price ($)" aria-label="Dollar amount (with dot and two decimal places)" />
                            </div>
                            <div className="flex flex-column flex-lg-row m-2">
                                <input value={maxPrice} onChange={priceChanged} type="number" name="maxprice" id="maxPrice" className="form-control m-2" placeholder="Max Price ($)" />
                            </div>
                        </div>
                    </div>
                    {/* End Advanced Search */}
                </form>
            </div>
        </div>
        {!userAuthenticated ? (
            <div className="cta container center">
                <a href="http://127.0.0.1:8000/register" className="btn btn-primary my-1">
                    Sign Up
                </a>
            </div>
        ): (
            <>
            </>
        )}
        
        <div className="header-bg"></div>
    </header>
  )
}

export default Header
