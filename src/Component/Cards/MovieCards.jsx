import { useContext } from "react";
import Context from "../ContextFile/Context";
import { useNavigate } from "react-router-dom";

const MovieCards = ({ headName }) => {

    let navigate = useNavigate();

    let { movieData } = useContext(Context);

    function clickHandler(id) {
        navigate(`/movies/${id}`);
    }

    return (
        <div className=' max-w-[1300px] mx-auto mt-[-25px]'>
            <h1 className='font-bold text-2xl mb-6'>{headName}</h1>
            <div className='flex gap-8 overflow-auto p-4'>
                {
                    movieData.map((val, id) => {
                        return (
                            <div className='h-[480px] pb-4 min-w-[280px] flex flex-col bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105'
                                onClick={() => clickHandler(id)}

                            >
                                <img className='w-full h-[85%] object-cover' src={val.thumbnail} alt={val.name} />
                                <h2 className='font-bold px-2 mt-2 text-xl'>{val.name}</h2>
                                <p className='px-2 text-gray-600'>{val.type}</p>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default MovieCards
