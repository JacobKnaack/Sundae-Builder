'use strict'; // forces use to use proper keywords

let wantsASundae;

// please do this cautiously, because it is error prone.
try {
  wantsASundae = prompt('Who you like a sundae?').toLowerCase(); // be careful if you click "cancel"
} catch (e) {
  console.log('An error has occurred', e);
}

let iceCreamFlavors = ['vanilla', 'chocolate', 'strawberry', 'rock road', 'mint'];
let iceCreamToppings = ['sprinkles', 'peanuts', 'mochi'];

if (wantsASundae === 'yes') {
  // ask about ice cream and toppings
  alert('Great, take a look at our ice cream flavors');

  let iceCreamFlavor = prompt('What flavor of ice cream would you like?').toLowerCase();

  if (iceCreamFlavors.includes(iceCreamFlavor)) {
    alert('Great!  Choose from our list of toppings');

    // choose 3 toppings
    let toppingOne = prompt('What is you first topping?').toLowerCase();

    if (iceCreamToppings.includes(toppingOne)) {
      alert(toppingOne +'Great! what else?');
      let toppingTwo = prompt('What is you second topping?');
      alert(toppingOne +'' + toppingTwo +'Great! what else?');
      let toppingThree = prompt('What is you third topping?');
      alert(toppingOne +'' + toppingTwo +'' + toppingThree +'Great!');

      // checking if toppings are valid
    }

  } else {
    alert('Ugh oh, we don\'t have that');
  }

} else {
  // alert that they should want ice cream.
  alert('Sorry about that, return when you want a sundae');
}
