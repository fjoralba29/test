// pizza_ingredients = {
//     'bianca' : {wheat: 150}, 
//     'marinara': {wheat: 100, tomatoes: 100}, 
//     'margherita' : {wheat: 120, tomatoes: 80, cheese: 80 }
// }

// pizza_eaten = [ {
//     name: john, 
//     pizza: bianca, 
//     num: 3
// }, 
// {
//     name: jimmi, 
//     pizza: marinara, 
//     num: 2
// }] 
 
// const pizza_eaten_file = 
// "john,marinara,3
// jimmy,margherita,1
// alice,marinara,2
// bob,bianca,4
// luke,bianca,2
// tom,margherita,3
// daniel,marinara,1"



// console.clear();

// /*
// Problem #1: I see an empty object at the end of the pizza_eaten
// Problem #2: we have spaces inside the values we parsed from the file
// */

function convertFile(file) {
     
  const lines = file.split("\n");
  const final_lines = lines.filter(element => element);
  const pizza_eaten = [];

  for (let line of final_lines) {
    console.log("line =>", line);
    const data = line.split(",");

    const trim_data = data.map(element => {
    return element.trim();
         
  });
  

    const clear_data = {};
    clear_data.name = trim_data[0];
    clear_data.pizza = trim_data[1];
    clear_data.quantity = trim_data[2];

    pizza_eaten.push(clear_data);
  }

  console.log(pizza_eaten); 

  const wheat = 150;
  const tomatoes = 100;
  const cheese = 80;
  let grams_of_wheat = 0; 
  let grams_of_tomatoes = 0;
  let grams_of_cheese = 0;

  for (let person of pizza_eaten) {
      if (person.pizza == 'bianca' ) {
          grams_of_wheat += wheat * person.quantity;
      }
      else if (person.pizza == 'marinara') {
          grams_of_wheat += wheat * person.quantity;
          grams_of_tomatoes += tomatoes * person.quantity;
      }
      else {
          grams_of_wheat += wheat * person.quantity;
          grams_of_tomatoes += tomatoes * person.quantity;
          grams_of_cheese += cheese * person.quantity;
      }
  }
  return ("There are used " + grams_of_wheat + " grams of wheat, " + grams_of_tomatoes + " grams of tomatoes and " + grams_of_cheese + " grams of cheese."); 
}



const file = `john, margherita, 3 
john,marinara,3
jimmy,margherita,1
alice,marinara,2
bob,bianca,4
luke,bianca,2
tom,margherita,3
daniel,marinara,1
`;

const file_converted = convertFile(file);
console.log(file_converted);









// function pizzaIngredients (name_of_pizza) {
//     const wheat = 150;
//     const tomatoes = 100;
//     let cheese = 80; 
//     if (name_of_pizza = 'bianca') {
//         return wheat;  
//     }
//     else if (name_of_pizza = 'marinara') {
//         return (wheat + tomatoes);
//     }
//     else {
//         return (wheat + tomatoes + cheese); 
//     }
// }

// function totalIngredients (convertFile) {
//     const wheat = 150;
//     const tomatoes = 100;
//     const cheese = 80;
//     let grams_of_wheat; 

//     for (let person of pizza_eaten) {
//         if (person.pizza == 'bianca' ) {
//             grams_of_wheat += wheat * person.quantity;
//         }
//         else if (person.pizza == 'marinara') {
//             grams_of_wheat += wheat * person.quantity;
//             grams_of_tomatoes += tomatoes * person.quantity;
//         }
//         else {
//             grams_of_wheat += wheat * person.quantity;
//             grams_of_tomatoes += tomatoes * person.quantity;
//             grams_of_cheese += cheese * person.quantity;
//         }
//     }
//     return grams_of_wheat, grams_of_tomatoes, grams_of_cheese; 
// }