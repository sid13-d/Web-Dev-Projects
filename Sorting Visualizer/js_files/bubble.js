const bubbleSort = document.getElementById("bubble");

console.log("array before sorting",arr);

bubbleSort.addEventListener('click', async () => {
    bblSort(arr);
})
 async function bblSort(arr){
     let el1=null, el2=null;
    for(var i = 0; i < arr.length; i++){
        
      // Last i elements are already in place  
      for(var j = 0; j < ( arr.length - i -1 ); j++){
          
        // Checking if the item at present iteration 
        // is greater than the next iteration
        if(arr[j] > arr[j+1]){
            
          // If the condition is true then swap them
           el1 = document.querySelector(`.barNo${j}`);
           el2 = document.querySelector(`.barNo${j+1}`);
           el1.style.background="red";
       el2.style.background="red";
       var w = await  waitforme(200);
       console.log(w);
       swapBars(el1, el2)
          el1.style.background="#035abe";
          el2.style.background="#035abe";
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
          
        }

      } el2.style.background="green";
    }
    // Print the sorted array
    console.log("The sorted array is",arr);
   }

   async function swapBars(el1, el2) {
       
      
        const style1 = window.getComputedStyle(el1);
        const style2 = window.getComputedStyle(el2);

        //getting the heights
        const transform1 = style1.getPropertyValue("height");
        const transform2 = style2.getPropertyValue("height");

        //swapping the heights
        el1.style.height = transform2;
        el2.style.height = transform1;
        console.log(transform1, transform2);

      

   }

   function waitforme(ms) {
    return new Promise(resolve => setTimeout(() => {resolve('waited')}, ms));
   }