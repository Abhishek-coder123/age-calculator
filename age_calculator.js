const date_input = document.querySelector("#date");
date_input.max = new Date().toISOString().split("T")[0];
const calculate = document.getElementById("calculate");
const result = document.getElementById("result")
calculate.addEventListener("click",calculateAge);
function calculateAge(){
    if(!date_input.value ){
        result.innerHTML = "Please select your date of birth"
        return;

    }
    let birth_date = new Date(date_input.value)
    let today = new Date()
    let d1 = birth_date.getDate()
    let m1 = birth_date.getMonth() + 1
    let y1 = birth_date.getFullYear()
    
    let d2 = today.getDate()
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()
    let d3,m3,y3
    y3 = y2 - y1
    if(m2>=m1){
        m3 = m2 - m1
    }else{
        y3--
        m3 = 12+ m2- m1
    }
    if(d2>=d1){
        d3 =  d2 - d1

    }else{
        m3--
       d3 =  getDaysInMonth(y1,m1) + d2 - d1   
    }
    if(m3<0){
        m3 = 11;
        y3--
    }
     result.innerHTML = `You are <span>${y3}</span>years <span> ${m3}</span> months and <span> ${d3}</span> days old`
    function getDaysInMonth(year,month){
        return new Date(year,month,0).getDate()
    }

}