import React from 'react';

import useFetch from '../../Hooks/useFetch';
import './Featured.css';

const Featured = () => {
    const images = [
        "https://t-cf.bstatic.com/xdata/images/city/square250/684500.webp?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o=",
        "https://t-cf.bstatic.com/xdata/images/city/square250/815261.webp?k=96c6465292cad5f9afffb2925a9f76b126d4675423300a6e63917f1fcf459a19&o=",
        "https://t-cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o="
    ]

    const places = [
        "Ikeja",
        "Ibadan",
        "Abuja",
    ]

    const { data, loading, error } = useFetch('/hotels/countByCity?cities=Ikeja,Ibadan,Abuja');

  return (
    <div className='featured'>
        { loading ? ("Loading, please wait...") : (
            <>
                {data && places && images.map((img,i) => (
                    <div className="featuredItem" key={i}>
                    <img 
                        src= {img}
                        alt="featuredimage" 
                        className="featuredImg" 
                    />
                    <div className="featuredTitles">
                        <h1>{places[i]}</h1>
                        <h2>{data[i]} propertie(s)</h2>
                    </div>
                </div>
                ))}
            </>
        )}
    </div>
  )
}

export default Featured