"use server"

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL = "/reviews"

export async function create(formData) {

    const options = {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json"
      }
    }

    const result = await fetch(url, options)

    if (result.status !== 201){
        const json = await result.json()
        const erros = json.reduce((str, erro) => str += ". " + erro.message, "")
        return {message: "Não foi possível cadastrar" + erros}
    }

    revalidatePath("/opiniao")
    return {ok: "Review cadastrada com sucesso"}

}

export async function getReviews(){
    const result = await fetch(url)
    const json = await result.json()
  
    if (!result.ok){
      const message = json.message
      throw new Error(`Falha ao obter dados das contas. (${result.status} - ${message} )` )
    }
  
    return json
  }
  