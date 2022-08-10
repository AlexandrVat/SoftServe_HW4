//--Task 1 
let bttn = document.getElementById("resultButton");
let ageBnt = document.getElementById("ageButton");
let monthBnt = document.getElementById("monButton");
let userBtn  = document.getElementById("userButton");

function calcRectangleArea(inWidth,inHeidth) {
  //  console.log(inWidth);
  //  console.log(inHeidth);

   if (!isNaN(inWidth) && !isNaN(inHeidth)){    
        return  inWidth * inHeidth;
    }
    else {        
        throw new Error('Input data not is numric!');      
        }
  }

function cRectangle(){
    let nWidth  = document.getElementById("widthR").value;
    let nHeidth = document.getElementById("heightR").value;

    let res = calcRectangleArea(nWidth,nHeidth);
  //  console.log(res);
    document.getElementById("resArea").value = res;

    
    //console.log(res);
}
//*************************************** */  
//--Task 2 

function checkAge(inAge){
    let result = false;
        try {
            
            if (inAge.length == 0){
                throw new Error("The field is empty! Please enter your age");                 
            }else { 
                if (!isNaN(inAge)){
                   if (inAge>14){
                  //    console.log("OK");
                      result = true; 
                   }
                   else{
                     throw new Error("You are too young.");
                   }
                }else{                    
                    throw new Error("Input data not is numeric!");  
                }                           
            }
                      
        } catch (e) {             
           alert(e.message);
        }
    return result;    

}


function ageLostFilm(){
    let manAge  = document.getElementById("myAge").value;
    
    if (checkAge(manAge)) {
        document.getElementById("linkFilm").value = "https://www.youtube.com/watch?v=VfSYyXQ0iLA&ab_channel=Grandma%27sSmuzi";
    }
    
    //console.log(res);
  
}
 //*************************************** */ 

//--Task 3 

class MonthException {
      constructor(numberMonth){
        this.numberMonth = numberMonth;
        this.monthsError = 'Incorrect month number';
      }
      monthName () {
        let months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ];
        if (this.numberMonth > 11 || this.numberMonth < 0) {
            return  this.monthsError;  
        }else{
            return  months[this.numberMonth] ;    
        } 
        
      }
}

function showMonthName(){
    try {
       let numMonth  = document.getElementById("nMaonth").value;
       
       if (isNaN(numMonth)){
        throw new Error("Input data not is numeric!");
       }  

       let shMonthName = new MonthException(parseInt(numMonth-1));
  //      console.log(numMonth);
  //      console.log(shMonthName);
        document.getElementById("monthName").value = shMonthName.monthName();
    } catch (err) {
        alert(err.message);  
    }
    
}

//*************************************** */ 

//--Task 4

let usersID = [21,-2,33,54,5];

function showUser(id) {
       if (id>=0){
          return 'id:'+id;
       }else{
        //throw new Error("Incorrect numeric value.");
        console.log('ID must not be negative '+id) 
        return '';                
       }
           
}

function showUsers(ids) {    
    let resArea = [];
    ids.forEach(function(elem){
                               if (elem>0) {
                                resArea.push(showUser(elem)) ; 
                               }
                               else{
                                console.log('ID must not be negative '+elem) ;
                               }
                        }) 
    console.log(resArea) ;      
}

function clcShowUser() {
    showUsers(usersID);
}


  bttn.onclick = cRectangle;
  ageBnt.onclick = ageLostFilm;
  monthBnt.onclick = showMonthName;
  userBtn.onclick = clcShowUser;

