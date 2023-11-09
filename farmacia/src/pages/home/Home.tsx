
import { Link } from "react-router-dom"


function Home() {
    return (
        <>
            <div className="bg-[#5c855b] flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Bem vindo à Farmácia.
                        </h2>
                        <p className='text-xl'>
                            Leia a bula.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                <Link to='/categorias' className='hover:underline'>Ver categorias</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center w-[69.5rem]">
                        <img
                            src="https://i.imgur.com/4r2R8H1.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home