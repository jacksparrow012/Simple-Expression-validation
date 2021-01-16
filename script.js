// function buttonclick()    
// {    
//     var menuList = document.getElementById("menu");    
//     if (menuList.className == "menuOff")    
//     {    
    
//         menuList.className = "menuOn";    
//     } else    
//     {    
    
//         menuList.className = "menuOff";    
//     }    
// }   

alert(
    ` Select which type of expression you want to validate?
    (1).Phone Number:
      (2).Zip Code:
       (3).Email:
        
    `
)
let option=parseInt(prompt("Select option from your previous list:"))
let inputValue
//console.log(inputValue);

str=inputValue;

let PhoneNumber=/^\+?(88)?[\d]{11}$/
let zipCode=/^[\d]{4}$/
let email= /^([\d\.\w]+)@([\w]){2,6}\.([a-zA-Z]){2,5}$/
switch (option) {
    case 1:
        inputValue=prompt("Enter a valid Bangladeshi Number")
        let val1=PhoneNumber.test(inputValue)
  
        if(val1){
         alert("your input is valid")
        }else{
            alert("your input is invalid")
        }
        break;

        case 2:
            inputValue=prompt("Enter4 digit zipcode")
            let val2=zipCode.test(inputValue)
           
            console.log(inputValue);
            if(val2){
                alert("your input is valid")
            }else{
                alert("your input is invalid")
            }
            break;

            case 3:
                inputValue=prompt("Enter A valid email address")
                let val3=email.test(inputValue)
             
                if(val3){
                    alert("your input is valid")
                }else{
                    alert("your input is invalid")
                }
                break;

    default:
        console.log("something went wrong");
        break;
}

