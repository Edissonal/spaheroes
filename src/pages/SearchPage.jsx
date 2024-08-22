import React from 'react'
import { HeroCard } from '../components';
import { useForm } from '../auth/hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { GetHeroesByname } from '../heroes/helpers';
import queryString from 'query-string';


export const SearchPage = () => {
const navigate = useNavigate();
const location = useLocation();


const {q = ''} = queryString.parse(location.search);
console.log(q)
const heroes = GetHeroesByname(q)
console.log(heroes);


 const showSearch =(q.length === 0);
 const showError =(q.length > 0) && heroes.length === 0;
 const {searchText,onInputChange} = useForm({
  searchText:q
});

const  onSearchSubmit = (event) =>{
  event.preventDefault();
//  if(searchText.trim().length <= 1) return;
  navigate(`?q=${searchText}`)
}
  
  return (
    <>
    <h1>Search</h1>
    <hr />

    <div className="row">
    <div className="col-5">
      <h4>Searching</h4>
      <hr />
      <form  onSubmit={onSearchSubmit}>
         <input
          type='text'
          placeholder='serach hero'
          className='form-control'
          name='searchText'
          autoComplete='of'
          value={searchText}
          onChange={onInputChange}
         ></input>

         <button
          className='btn btn-outline-primary mt-1'
         >Search</button>
      </form>
    </div>

    <div className="col-7">
        <h4>Results</h4>
        <hr />
        {/*
                (q === '')? <div className='alert alert-info'>Search a hero</div>
         :(heroes.length === 0) && <div className='alert alert-danger'>tehre' no results  <b>{q}</b></div>
        */
        }
        
        <div className='alert alert-info animate__animated animate__fadeIn'   style={{display:showSearch ?'' :'none'}}>Search a hero</div>
        <div className='alert alert-danger animate__animated animate__fadeIn' style={{display:showError ?'':'none'}}>tehre' no results  <b>{q}</b></div>
        {
          heroes.map(hero => (
            <HeroCard key={hero.id} {...hero}></HeroCard>
          ))
        }
       {/* <HeroCard></HeroCard>*/ } 

    </div>
    </div>

    </>
  )
}
