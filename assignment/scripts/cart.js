console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []


function addItem(item){
    basket.push(item);
    console.log(`Added item in basket: ${basket}`);
return true;
}
addItem("pasta");
addItem("oranges")
addItem("sweet potato")
addItem("celery")
addItem("apple")

function listItems(){
for( i =0; i < basket.length; i += 1){
    console.log(`In our basket is: ${basket}`);
}
}
listItems()

function empty(){
basket = []
  }
  empty()
  console.log(`basket is now empty, ${basket}`);

  const maxItems = 5;

  function isFull(){
    if(basket.legth < maxItems){
        return false;
    } else if(basket.length >= maxItems){
        return true;
    }
  }
  isFull();
  console.log(isFull());

  /**
   * 
   * @param {string} item 
   */
  function removeItem(item){
    basket.indexOf("apple", 0)
    
  }




  









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
