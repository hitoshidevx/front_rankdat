"use client"

import { updateReview } from "@/actions/reviews"
import Button from "@/components/Button"
import ButtonLink from "@/components/ButtonLink"
import InputText from "@/components/InputText"
import { redirect } from "next/navigation"
import { useState } from "react"

export default function Form({review}) {

    const [reviewEdit, setReviewEdit] = useState(review)
    const [error, setError] = useState("")

    const handleFieldChange = (field, value) => {
        setReviewEdit({
            ...reviewEdit,
            [field]: value
        })
    }

    const handleSubmitEdit = async () => {

        const response = await updateReview(reviewEdit);
        if (response?.error){
            setError(response.error)
            return
        }
        
        redirect("/opiniao")
    }

    return (
        <form action={handleSubmitEdit}>
            <InputText 
                label="tituloReview" 
                id="tituloReview" 
                name="tituloReview" 
                value={reviewEdit.tituloReview} 
                onChange={e => { handleFieldChange("tituloReview", e.target.value)} }  
            />
            <InputText 
                label="descricaoReview" 
                id="descricaoReview" 
                name="descricaoReview" 
                value={reviewEdit.descricaoReview}
                onChange={e => { handleFieldChange("descricaoReview", e.target.value)} } 
            />

            <div className="flex justify-around">
                <ButtonLink variante="secundary" href="/review">cancelar</ButtonLink>
                <Button>salvar</Button>
            </div>
        </form>
    )
}