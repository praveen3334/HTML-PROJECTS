console.log("welcome to ATM")
let pin = parseInt(prompt("Enter PIN Number"))
let AC =10000;

let userExist=false;
for(let i=0;i<100;i++){
    if(i==pin){
        console.log("User Exists")
        userExist =true;
        break
    }
}
    if(!userExist){
        console.log("user NOT Exist ")
    }
    else{
        while(true){
            console.log("1.Depsit\n2.withdraw\n3.Balance Enquiry\n4.exit")
            let choice = parseInt(prompt("Enter Your choice"))
            if(choice===1){
                let dep = parseInt(prompt("Enter Amount to Deposit :"))
                AC=AC+dep;
                console.log("Now Your Account Balance is",AC)
            }
            else if(choice===2){
                let wth = parseInt(prompt("Enter Amount to Withdraw:"))
                AC=AC-wth;
                  console.log("Now Your Account Balance is",AC)
            }
            else if(choice==3){
                console.log("your account balance is",AC)
            }
            else if(choice==4){
                console.log("Thanks for coming,Visit Again")
                break;
            }
            else{
                console.log("invalid input")
                break;
            }
            let next=prompt("enter yes or no")
            if(next.toLowerCase()==="no"){
                console.log("thanks for coming,visit again")
                break;
            }
     
        }
    }