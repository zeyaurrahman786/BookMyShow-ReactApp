import { useContext } from "react";
import Context from "../ContextFile/Context";

const GamesSportCard = ({ headName }) => {

    let { gamesData } = useContext(Context);

    return (
        <div className=' max-w-[1300px] mx-auto mt-[-25px]'>
            <h1 className='font-bold text-2xl my-8  mt-12'>{headName}</h1>
            <div className='flex gap-8 overflow-auto p-4 mb-10'>
                {
                    gamesData.map((val, index) => {
                        return (
                            <div className='h-[480px] pb-4 min-w-[280px] flex flex-col bg-white rounded-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105'>
                                <img className='w-full h-[85%] object-cover' src={val.img} />
                                <h2 className='font-bold px-2 mt-2 text-xl'>{val.gameName}</h2>
                                <p className='px-2 text-gray-600'>{val.desc}</p>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default GamesSportCard
