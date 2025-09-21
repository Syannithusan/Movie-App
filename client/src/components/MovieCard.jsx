import {useNavigate} from 'react-router-dom'
const MovieCard = ({movie}) => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-between p-3 bg-gray-800
    rounded-2xl hover:-translate-y-1 transition duration-300 w-66'>
        
        <img  onClick={()=>{navigate(`/movies/${movie}`)}}
        src={movie.backdrop_path} alt="nithu" className='rounded-lg h-52 w-full
        object-cover object-right-bottom cursor-pointer'/>
    </div>
  )
}

export default MovieCard





