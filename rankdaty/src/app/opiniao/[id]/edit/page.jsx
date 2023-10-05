import { getReviewById } from "@/actions/reviews";
import NavBar from "@/components/NavBar";
import Form from "./Form";

export default async function FormReviewEdit( {params} ) {

    const carregarDados = async () => {
        return await getReviewById(params.id)
    }

    const review = await carregarDados()

    return (
        <>
            <NavBar />

            <main className="bg-slate-900 p-11 mt-10 rounded-lg text-slate-200 max-w-md m-auto">
                <h2 className="text-2xl font-bold">Editar Review</h2>

               <Form review={review} />

            </main>
        </>
    )
}