const data = {
    name: 'Dizzy',
    type: 'Dog',
    color: 'white'
}

function kiss(name, type, color) {
 console.log(`${name} is a cute ${color} ${type}`)
}

kiss(...{ data} )