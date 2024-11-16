import { useContext } from "react";
import Context from "../ContextFile/Context";
import { useNavigate } from "react-router-dom";

const MusicCard = ({ headName }) => {

    let { musicData } = useContext(Context);

    let navigate = useNavigate();


    function clickHandler(id) {
        navigate(`/music/${id}`);
    }


    return (
        <div className=' max-w-[1300px] mx-auto mt-[-25px]'>
            <h1 className='font-bold text-2xl my-8  mt-12'>{headName}</h1>
            <div className='flex gap-8 overflow-auto p-4 mb-10'>
                {
                    musicData.map((val, index) => {
                        return (
                            <div className='h-[480px] pb-4 min-w-[280px] flex flex-col bg-white rounded-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105'

                            // onClick={() => clickHandler(index)}

                            >
                                <img className='w-full h-[85%] object-cover' src={val.image} />
                                <h2 className='font-bold px-2 mt-2 text-xl'>{val.title}</h2>
                                <p className='px-2 text-gray-600'>{val.artist}</p>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default MusicCard
