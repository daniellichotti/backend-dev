async function addPet() {
    const response = await fetch(`http://[::1]:3000/pets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "nome": "Onça",
            "tipo": "Gato",
            "idade": 16
        })
    })

    if (response.ok) {
        console.log('Pet adicionado com sucesso!')
    } else {
        console.log('Falha ao adicionar pet!')
    }
}

async function patchPet() {
    const response = await fetch(`http://[::1]:3000/pets/c8511fba-3f5e-44cc-ae83-6e16218a6c39`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "nome": "Rengar"
        })
    })

    if (response.ok) {
        console.log('Pet atualizado com sucesso!')
    } else {
        console.log('Falha ao atualizar pet!')
    }
}

async function putPet() {
    const response = await fetch(`http://[::1]:3000/pets/c8511fba-3f5e-44cc-ae83-6e16218a6c39`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "nome": "Frajola",
            "tipo": "Cachorro",
            "idade": 10
        })
    })

    if (response.ok) {
        console.log('Pet atualizado com sucesso!')
    } else {
        console.log('Falha ao atualizar pet!')
    }
}

async function deletePet() {
    const response = await fetch(`http://[::1]:3000/pets/e5bd80ae-8adf-441b-b4dc-275d55c22fdc`, {
        method: "DELETE"
    })

    if (response.ok) {
        console.log('Pet deletado com sucesso!')
    } else {
        console.log('Falha ao deletar pet!')
    }
}

deletePet()