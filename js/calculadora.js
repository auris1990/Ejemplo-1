let rta = document.getElementById("rta")
let op = ""
let num1 = ""
let num2 = ""
document.addEventListener("click", (funclick));

function funclick(event) {
    let x = event.target.nodeName
    let y = event.target.id
    //let z = event.target.className
    //stopPropagation()
    if (x == "BUTTON"){
        switch (y){
            case "ac":
                op = ""
                num1 = ""
                num2 = ""
                rta.textContent = ""
                break
            case "0":
                rta.textContent = rta.textContent +"0"
                break
            case "1":
                rta.textContent = rta.textContent +"1"
                break
            case "2":
                rta.textContent = rta.textContent +"2"
                break
            case "3":
                rta.textContent = rta.textContent +"3"
                break
            case "4":
                rta.textContent = rta.textContent +"4"
                break
            case "5":
                rta.textContent = rta.textContent +"5"
                break
            case "6":
                rta.textContent = rta.textContent +"6"
                break
            case "7":
                rta.textContent = rta.textContent +"7"
                break
            case "8":
                rta.textContent = rta.textContent +"8"
                break
            case "9":
                rta.textContent = rta.textContent +"9"
                break
            case "0":
                rta.textContent = rta.textContent +"0"
                break
            case "suma":
                num1 = rta.textContent
                op = "suma"
                rta.textContent = ""
                break
            case "resta":
                num1 = rta.textContent
                op = "resta"
                rta.textContent = ""
                break
            case "multi":
                num1 = rta.textContent
                op = "multi"
                rta.textContent = ""
                break
            case "division":
                num1 = rta.textContent
                op = "divi"
                rta.textContent = ""
                break
            case "igual":
                num2 = rta.textContent
                rta.textContent = ""
                if (op == "suma"){
                    document.getElementById("rta").innerHTML = (parseFloat(num1)+parseFloat(num2)).toFixed(1)
                } else if (op == "resta"){
                    document.getElementById("rta").innerHTML = (parseFloat(num1)-parseFloat(num2)).toFixed(1)
                } else if (op == "multi"){
                    document.getElementById("rta").innerHTML = (parseFloat(num1)*parseFloat(num2)).toFixed(1)
                } else if (op == "divi"){
                    document.getElementById("rta").innerHTML = (parseFloat(num1)/parseFloat(num2)).toFixed(1)
                }
                break
        }
    } event.preventDefault();    
} 
