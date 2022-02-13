// console.log('hello world')

let arr = [];
function bars () {
    deletBars();

for(let i=0; i<100; i++) {
    //creating array of 100 randoms
    arr[i] = Math.floor(Math.random() * 100) +1;

    //creating 100 divs
    const div = document.createElement("div");
        const cl =`barNo${i}`;
        div.className = cl;
        div.classList.add("bar")
        div.style.height = `${arr[i] * 4}px`
        document.getElementById("bars").appendChild(div);
}

}
console.log(arr);

function deletBars() {
    const bar = document.getElementById('bars');
    bar.innerHTML = "";
}
//making new array
const newArray = document.getElementById("new_array");
newArray.addEventListener('click', () => {
    bars();
})



