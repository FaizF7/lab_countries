const getCountryByName = async (countryName) =>{
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await response.json()
    console.log(data)
    data.forEach((element)=>displayData(element,'#country-details'))

}

const displayData = (data,id)=>{
    const allCountrySection = document.querySelector(id)
    const div = document.createElement("div")
    const name = document.createElement("p")
    name.innerText = "Name: " + data.name.common
    div.appendChild(name)

    const capital = document.createElement("p")
    capital.innerText = "Capital: " + Object.values(data.capital).join(', ') 
    div.appendChild(capital)

    const languages = document.createElement("p")
    countryLanguages = data.languages
    languages.innerText = 'Languages: ' + Object.values(countryLanguages).join(', ')
    div.appendChild(languages)

    const population = document.createElement("p")
    population.innerText = "Population: " + data.population
    div.appendChild(population)
    allCountrySection.appendChild(div)
    const hr = document.createElement("hr")
    allCountrySection.appendChild(hr)
}

const getAllCountries = async () =>{
    const response = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await response.json()
    console.log(data)
    data.forEach(element => {
        try{
            displayData(element,'#all-countries')
        }
        catch(error){
            console.error(error)
            console.log(element.name.common)
            console.log(element)
        }
    })

}

const search = document.querySelector('#search-bar')
const countrySection = document.querySelector('#country-details')

search.addEventListener("input", (event)=>{
    countrySection.innerHTML=''
    getCountryByName(event.target.value)
})

try {
    getAllCountries()
} catch (error) {
    console.error();
}