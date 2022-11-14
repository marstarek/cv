import React,{useEffect,useState} from 'react'

import Slider from '../slider/Slider'
import Hero from '../hero/Hero'
import Projects from '../projects/Projects'
import Certificate from '../certificate/Certificate'
import useFetch from '../../../useFetch'

import Trend from '../trend/Trend'


const Home = () => {
  // const { data: data,isloading,error} = useFetch(`http://localhost:8001/books`)

  // const [page, setpage] = useState(1);
  // const [moviepopular, setmoviepopular] = useState("popular");
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getmovies({ page, moviepopular }));
    
  // }, [dispatch]);
  // const {isLoading , movies,movieInfo} = useSelector((state) => state.movies);

     return (
       <>
               
         {/* <Slider movies={movies} /> 
         <FilterSlider  movies={movies} dispatch={dispatch} getmovie={getmovie} isLoading={isLoading} />
         <Trend movies={movies}/>
         <List /> */}
   

        <Hero />
        <Projects />
        <Certificate />

       </>

  )
}

export default Home