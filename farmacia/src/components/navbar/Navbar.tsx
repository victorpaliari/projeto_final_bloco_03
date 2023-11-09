import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-[#5c855b] text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                    Farmárcia

                    <div className='flex gap-9'>
                        Produtos
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar