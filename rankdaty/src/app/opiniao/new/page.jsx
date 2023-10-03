"use client"

import { useState } from "react";
import { redirect } from 'next/navigation';
import { create } from "@/actions/reviews";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";

export default function FormReview() {
    const [message, setMessage] = useState("");

    async function handleSubmit(formData){
        const result = await create(formData)
        if(result.message){
            setMessage(result.message)
            return
        }
        redirect("/opiniao")
    }

    return (
        <>
            <NavBar />

            <main className="bg-indigo-950 p-11 mt-10 rounded-lg max-w-md m-auto">
                <h2 className="text-2xl font-bold">Adicionar Review</h2>

                <form action={handleSubmit}>
                    <InputText label="tituloReview" id="tituloReview" name="tituloReview" />
                    <InputText label="descricaoReview" id="descricaoReview" name="descricaoReview" />

                    <div className="flex justify-around mt-10">
                        <ButtonLink variante="secundary" href="/opiniao">
                            cancelar
                        </ButtonLink>
                        <Button>
                            salvar
                        </Button>
                    </div>

                    <p>{message}</p>
                </form>
            </main>
        </>
    );
}