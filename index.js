const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat(name){ 
    cats.unshift("Bob")
    return cats;
}

function destructivelyRemoveLastCat(name){
    cats.pop(2)
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift(0)
    return cats;
}

function appendCat(name){
    return[...cats, name]

}

function prependCat(name) {
    return [name, ...cats];
}



function removeFirstCat(name){
    return cats.slice(1);
}


function removeLastCat(name){
    return cats.slice(0, -1);
}