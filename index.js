const getCountryByName = async (countryName) =>{
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await response.json()
    console.log(data)
    displayData(data[0])
    
}

const section = document.querySelector('#country-details')
const displayData = (data)=>{
    const div = document.createElement("div")
    const name = document.createElement("p")
    name.innerText = "Name: " + data.name.common
    div.appendChild(name)

    const capital = document.createElement("p")
    capital.innerText = "Capital: " + data.capital[0]
    div.appendChild(capital)

    const languages = document.createElement("p")
    countryLanguages = data.languages
    languages.innerText = 'Languages: ' + Object.values(countryLanguages).join(', ')
    div.appendChild(languages)

    const population = document.createElement("p")
    population.innerText = "Population: " + data.population
    div.appendChild(population)
    section.appendChild(div)
    const hr = document.createElement("hr")
    section.appendChild(hr)
}

const getAllCountries = async () =>{
    const response = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await response.json()
    console.log(data)
    data.forEach(element => {
        try{
            displayData(element)
        }
        catch(error){
            console.error(error)
            console.log(element.name.common)
            console.log(element)
        }
    })

}

// getCountryByName("Jamaica")
try {
    getAllCountries()
} catch (error) {
    console.error();
}


