let favoriteMovie = {

nameOfMovie: "Beauty and the Beast",
  runTime: 110,
  genre: "Disney",
  characters: [{
 		name: "Belle",
    age: 20,
    item: ['mirror', 'dress']},
    
    {name: "Beast",
    age: 22,
    item: ['rose', 'castle']}
] 
  
}

console.log(favoriteMovie.nameOfMovie);
console.log(favoriteMovie.runTime);
console.log(favoriteMovie.characters[0].name)
console.log(favoriteMovie.characters[0].item[1])
console.log(favoriteMovie.characters[1].name)
console.log(favoriteMovie.characters[1].item[1])

/*
  - Declare a variable named favoriteMovie that is initialized as an object
      - The favoriteMovie object will hold keys of nameOfMovie, runTime, genre, and characters
          - nameOfMovie should be assigned a value that is a string
          - runTime should be assigned a value that is a number
          - genre should be assigned a value that is a string
          - characters should be assigned a value that is an array
              - the characters key that is assigned a value of an array should hold no more than 2 character objects. 
                  - each character object in the array should hold keys of name, age, and items
                      - name should be assigned a value that is a string
                      - age should be assigned a value that is a number
                      - items should be assigned a value that is an array
                          - the items key that is assigned a value of array should hold no more than 2 item objects
                              - each item object in the array should hold a single key of item. The value you assign to the key of item should be a string
                              
  - use console.log statements to show that you can print the following pieces of information:
    - nameOfMovie
    - runTime
    - characters
        - the name of a character
        - an item
        */