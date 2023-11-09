import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-[#5c855b] text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/' className='hover:underline'>Farmacia</Link>

                    <div className='flex gap-9'>
                        <Link to='/' className='hover:underline'>Home</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>
                        <Link to='/' className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar