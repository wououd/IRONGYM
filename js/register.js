    //? **************activity part
    let fitness=`<label class="my-1 mr-2 color" for="inlineFormCustomSelectPref">Fitness categories</label>
    <div class="input-group form-group ">
     <select class="custom-select my-1 mr-sm-2 fitness" id="inlineFormCustomSelectPref">
     <option value="body muscle">Body muscle</option>
     <option value="cardio">Cardio</option>
     <option value="body mind">Body mind</option>
     <option value="physical culture">Physical culture</option>
   </select>
    </div>`
    let dance=`<label class="my-1 mr-2 color" for="inlineFormCustomSelectPref">Dance categories</label>
    <div class="input-group form-group ">
     <select class="custom-select my-1 mr-sm-2 dance" id="inlineFormCustomSelectPref">
     <option value="hip-hop">Hip-Hop</option>
     <option value="afro-dance">Afro dance</option>
     <option value="indian-dance">Indian dance</option>
     <option value="salsa-dance">Salsa dance</option>
   </select>
    </div>`
    let activity = document.querySelector(".activity");
    activity.addEventListener("change",()=>{
        let category = document.querySelector(".activity-category")
        if(activity.value=="Fitness"){
            category.innerHTML=fitness;
        }else if(activity.value=="Dance"){
            category.innerHTML=dance;

        }
    })




    //! Register function
let register = document.querySelector(".register");
register.addEventListener("click",()=>{
    let firstName = document.querySelector(".firstName");
    let lastName = document.querySelector(".lastName");
    let email = document.querySelector(".email");
    let userName = document.querySelector(".userName");
    let age = document.querySelector(".age");
    let password = document.querySelector(".password");
    let validatePassword = document.querySelector(".vpassword");
    let activity = document.querySelector(".activity");
// validate firstName , lastNAme 
    const expName= /(^[A-Z a-z]{2})\w+/;
   if (expName.test(firstName.value) ) {
    firstName.classList.add("is-valid");
   } else {
    firstName.classList.add("is-invalid")  
    let invalid = document.querySelector("#invalidFirstName");
    invalid.innerText="Please write a valid name that start with uppercase letter "  
  }
  if (expName.test(lastName.value) ) {
    lastName.classList.add("is-valid");

   } else {
   lastName.classList.add("is-invalid") 
   let invalid = document.querySelector("#invalidLastName");
   invalid.innerText="Please write a valid last name that start with uppercase letter " 
  }
 // validate email
   var exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (exp.test(email.value)) {
      email.classList.add("is-valid")
    } else {
        
        email.classList.add("is-invalid")
        let invalid = document.querySelector("#invalidEmail");
        invalid.innerText="Please write a valid email contains @ " 
    }

    // validate user name 
    const expPassword = /(^[A-Z a-z 0-9]{6})\w+/;

if ( expPassword.test(userName.value) ) {
    userName.classList.add("is-valid");
   } else {
    userName.classList.add("is-invalid")    
    let invalid = document.querySelector("#invalidUserName");
    invalid.innerText="Please write a valid user name contains  UPPERCASE and lowercase letter and numbers " 
  }

//validate first password////
   if (expPassword.test(password.value) && expPassword.test(userName.value) ) {
    password.classList.add("is-valid");
    userName.classList.add("is-valid");
      //!!!!!!!!!!!!!!validate second password
    if(password.value==validatePassword.value){
        validatePassword.classList.add("is-valid")
        } else {
            validatePassword.classList.add("is-invalid")
            let invalid = document.querySelector("#invalidPassword1");
            invalid.innerText="check your password again" 
        }
   } else {
        password.classList.add("is-invalid")
        let invalid = document.querySelector("#invalidPassword");
        invalid.innerText="Please write a valid password contains more than 6 UPPERCASE and lowercase letters and numbers  " 
  }

  // validate age
  if(age.value>=4 && age.value<90){
    age.classList.add("is-valid")
    } else {
    age.classList.add("is-invalid")
    let invalid = document.querySelector("#invalidAge");
    invalid.innerText="enter a valid age" 
    }
});

