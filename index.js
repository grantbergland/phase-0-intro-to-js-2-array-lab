const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
cats.push(name);
}

function destructivelyPrependCat(name){
cats.unshift(name);    
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    return [...cats, name]
}

function prependCat(name){
    return [name, ...cats]
}

function removeLastCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    cats.pop()
    return cats
}

function removeFirstCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    cats.shift()
    return cats
}


