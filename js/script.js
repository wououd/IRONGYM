
let calculate = document.querySelector(".calculate")  

calculate.addEventListener("click",()=>{
    let height = document.querySelector("#height");
    let weight = document.querySelector("#weight");
    let modal = document.querySelector(".modal-body");
    let html=``;
    let bmi = weight.value/Math.pow(height.value,2);
    if(bmi<18){
    html=`<h2>Your BMI is ${Math.round(bmi*100)/100} :</h2> <h5>Underweight and may cause certain health risks.</h5>`;
    modal.innerHTML=html;
    }else if(bmi>18.5 && bmi<=24.9){
        html=`<h2>Your BMI is ${Math.round(bmi*100)/100} :</h2> <h5>Healthy weight that does not increase health risks.</h5>`;
    modal.innerHTML=html;
    }else if(bmi=>25 && bmi<=2.9){
        html=`<h2>Your BMI is ${Math.round(bmi*100)/100} :</h2> <h5>Excess weight can cause certain health risks.</h5>`;
    modal.innerHTML=html;
    }else{
        html=`<h2>Your BMI is ${Math.round(bmi*100)/100} :</h2> <h5>Obesity, increased risk of developing certain diseases.</h5>`;
    modal.innerHTML=html;
    }
    
})





