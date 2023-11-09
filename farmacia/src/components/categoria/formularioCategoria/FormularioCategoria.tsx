import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../service/Service";

import Categoria from "../../../models/Categoria";

function FormularioCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, { })
        } catch (error: any) { }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, { })
                alert('Categoria atualizada com sucesso')

            } catch (error: any) {
                    alert('Erro ao atualizar a categoria')
            }

        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, { })
                alert('Categoria cadastrada com sucesso')
            } catch (error: any) {
                    alert('Erro ao cadastrar a Categoria')
            }
        }

        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-teal-600 
                    hover:bg-teal-900 w-1/2 py-3 mx-auto flex justify-center" type="submit">Cadastrar

                </button>
            </form>
        </div>
    )
}

export default FormularioCategoria