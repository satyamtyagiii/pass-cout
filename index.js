

let count = 0;


function increment() {
    count = count + 1;
    document.getElementById("count-el").innerText= count;
    console.log(count);
}


    increment();
    let save = 0;
    function saveCount(){
        
        let countStr = count +" - "
        document.getElementById("save-el").innerText += countStr;
        console.log(count)
        document.getElementById("count-el").innerText = 0;
        count = 0
    }
    saveCount()