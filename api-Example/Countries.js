// const loadCountries=()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>displayCountries(data))
// }
// const displayCountries=countries=>{
//     const ContainerCountries=document.getElementById('all-countries')
//     // console.log(countries)
//     // for(const country of countries){
//     //     console.log(country)
//     // }
//     countries.forEach(country=>{
//         console.log(country.name.common);
//         const countryDiv=document.createElement('div');
//         countryDiv.classList.add('country')
//         countryDiv.innerHTML=`
//         <h3>Name:${country.name.common}</h3>
//         `;
//         ContainerCountries.appendChild(countryDiv);
//     })
// }
// loadCountries()

const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}
const displayCountries=countries=>{
    const ContainerCountries=document.getElementById('all-countries')
    countries.forEach(country=>{
        console.log(country.name.common);
        const countryDiv=document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML=`
        <h3>Name:${country.name.common}</h3>
        `;
        ContainerCountries.appendChild(countryDiv)
    }

    )

}
loadCountries()