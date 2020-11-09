/* This is for our javascript for assignment 2 */

const restarray = [];

const end = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

fetch(end)
.then(blob => blob.json())
.then(items => restarray.push(...items))

function search (query, restarray){
    return restarray.filter(result => {
        const expression = new RegExp(query, 'gi')
        return result.name.match(expression) || result.city.match(expression)
    })};

function showmatches() {
    const matches = search(this.value,restarray);
    let index = matches.map(restaurant => {
        const expression = new RegExp(this.value,'gi');
        return `
        <li>
        <span class="restname">${restaurant.name} || </span>
        <span class="restcat">${restaurant.category} || </span>
        <span class="restcity">${restaurant.city}</span>
        </li>
        `;
    }).join('');
    if(this.value.length === 0) {
        index = [];}
    searchresults.innerHTML = index;
};

const searchinput = document.querySelector('.searchInput')
const searchresults = document.querySelector('.ulList')

searchinput.addEventListener('change', showmatches);

searchinput.addEventListener('keyup', showmatches);