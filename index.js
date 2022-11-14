// Write your solution here!
// copied code clip from testing page
// describe('index.js', function () {
//     describe('cats', function () {
//       it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
//         expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//       });
//     });
  
//     describe('Array functions', function () {
//       beforeEach(function () {
//         cats.length = 0;
  
//         cats.push('Milo', 'Otis', 'Garfield');
//       });



const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
}

function prependCat(name){
    
    const newCats = [...cats];
    newCats.unshift(name);
    return newCats;
}

function removeLastCat(name){
    
    const newCats = [...cats];
    newCats.pop(name);
    return newCats;
}

function removeFirstCat(name){
    
    const newCats = [...cats];
    newCats.shift(name);
    return newCats;
}