"use server"

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/reviews"

export async function create(formData) {

  const options = {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json"
    }
  }

  const result = await fetch(url, options)

  if (result.status !== 201) {
    const json = await result.json()
    const erros = json.reduce((str, erro) => str += ". " + erro.message, "")
    return { message: "Não foi possível cadastrar" + erros }
  }

  revalidatePath("/opiniao")
  return { ok: "Review cadastrada com sucesso" }

}

export async function getReviews() {
  const result = await fetch(url, { next: { revalidate: 3600 } })

  if (!result.ok) {
    throw Error("Não deu para carregar as reviews amigo :(")
  }

  return result.json()
}

export async function deleteReview(id) {
  const deleteUrl = url + "/" + id
  const options = {
    method: "DELETE"
  }
  const result = await fetch(deleteUrl, options)
  if (result.status !== 204) 
    return { 
      error: "Erro ao apagar receita. " + result.status 
  }

  revalidatePath("/opiniao")
}

export async function updateReview(review) {
  const updateURL = url + "/" + review.id
  const options = {
    method: "PUT",
    body: JSON.stringify(review),
    headers: {
      "Content-Type": "application/json"
    }
  }
  const result = await fetch(updateURL, options)

  if (result.status !== 200) 
    return { 
      error: "Erro ao atualizar a review. " + result.status 
    }

  revalidatePath("/opiniao")
}

export async function getReviewById(id) {
  const getUrl = url + "/" + id

  const result = await fetch(getUrl)

  if (result.status !== 200) 
    return { 
    error: "Erro ao buscar dado dessa review. Reveja o id inserido.. " + result.status 
  }

  const json = await result.json()

  return json
}