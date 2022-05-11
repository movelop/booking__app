import React from 'react';


import './SearchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img
            src="https://t-cf.bstatic.com/xdata/images/hotel/square200/238794425.webp?k=b19da0ab2aed0c318e77a17ab7fd649ce2b767b552638cc2d9dd2d0824ea2f92&o=&s=1"
            alt=""
            className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle">Radisson Lagos Ikeja</h1>
            <span className="siDistance">2.2 km from centre</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$112</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>   
            </div>
        </div>
    </div>
  )
}

export default SearchItem