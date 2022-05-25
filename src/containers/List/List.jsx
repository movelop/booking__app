import React, { useState } from 'react';
import { Navbar, Header, MailList, Footer } from '../../components';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

import './List.css';
import { SearchItem } from '../../components';
import useFetch from '../../Hooks/useFetch';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [searched, setSearched] = useState('');
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`
  );

  const handleSearch = () => {
    setDestination(searched);
    reFetch();
  };


  return (
    <div>
      <Navbar />
      <Header type = 'list' />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination? destination : 'Enter desination'} onChange={(e) => setSearched(e.target.value)} />
            </div>
            <div className="lsItem">
              <label>Check-in-date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                        dates[0].endDate,
                        "dd/MM/yyyy"
                )}`}  
              </span>
              { openDate && (
                <div className="date" onMouseLeave={() => setOpenDate(false)}>
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              </div>
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className='lsOptionInput' onChange={(e) => setMin(e.target.value)} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className='lsOptionInput' onChange={(e) => setMax(e.target.value)} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input 
                    type="number"
                    min={1}
                    className='lsOptionInput'
                    placeholder={options.adult}
                    onChange= {(e) => setOptions({...options, adult: e.target.value})}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input 
                    type="number"
                    min={1}
                    className='lsOptionInput'
                    placeholder={options.children}
                    onChange= {(e) => setOptions({...options, children: e.target.value})}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Rooms</span>
                  <input 
                    type="number"
                    min={1}
                    className='lsOptionInput'
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="listResult">
            {loading ? ('Loading, please wait ...') : (
              <>
                {data.map((item) => (
                  <SearchItem item = {item} key= {item._id} />
                ))}
              </>
            )}
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
      
  )
}

export default List