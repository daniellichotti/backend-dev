async function addPet() {
    const response = await fetch(`http://[::1]:3000/pets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "nome": "Leão",
            "tipo": "Gato",
            "idade": 15
        })
    })

    if (response.ok) {
        console.log('Pet adicionado com sucesso!')
    } else {
        console.log('Falha ao adicionar pet!')
    }
}

addPet()