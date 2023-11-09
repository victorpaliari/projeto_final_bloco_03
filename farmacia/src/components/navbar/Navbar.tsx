
function Navbar() {
    return (
        <>
            <div className='w-full bg-[#5c855b] text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                    Farmárcia

                    <div className='flex gap-9'>
                        Produtos
                        Categorias
                        Cadastrar categoria
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar