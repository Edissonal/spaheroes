import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../heroes/helpers/getHeroById';

export const HeroPage = () => {
  const {id,...rest} = useParams();
  console.log(id,rest);

  const hero = useMemo(()=> getHeroById(id),[id]);
  
  const  navigate =useNavigate();

  const onNavigateBack =()=>{
        navigate(-1)
    }

  if(!hero){
    return <><Navigate to="/marvel" /></>
  }

  return (
    <div className='row mt-5'>
        <h1>{hero.superhero}</h1>
        <div className="col-4">
           <img 
           src={`/assets/heroes/${id}.jpg`} 
           alt={hero.superhero}
           className="img-thumbnail animate__animated animate__fadeInLeft"
           ></img>
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className='list-group list-grpup-flush'>
            <li className='list-group-item'><b>Alther Ego:</b>{hero.alter_ego}</li>
            <li className='list-group-item'><b>Alther Ego:</b>{hero.publisher}</li>
            <li className='list-group-item'><b>First Apperance:</b>{hero.first_appearance}</li>
          </ul>
          <h5 className='mt-3'>Characters</h5>
          <p>{hero.characters}</p>
          <button  
                  className='btn btn-outline-primary'
                  onClick={onNavigateBack}
                  >
                Regresar
          </button>
        </div>
    </div>
  )
}
