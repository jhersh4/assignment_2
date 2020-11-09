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
    })
}