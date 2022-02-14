string = document.getElementById("skrift");

function escapeRegExp(string) {
    return string.replace(/([A-b])([v])\w+/g, '\\$&'); // $& means the whole matched string
}

let re = new RegExp(/([A-b])([v])\w+/g)

document.getElementById("skrift").addEventListener("input", function(){
    console.log(escapeRegExp(string))
    console.log(string.value)
})




  
  