// schedule part ********

let activities = document.querySelectorAll(".list-activities");
let title = document.querySelector(".activity-name")
let description = document.querySelector(".activity-description")
let list= document.querySelector(".activity-list")
let planing = document.querySelector(".planing")

activities.forEach(activity =>{
    
    activity.addEventListener("click",()=>{
        title.innerText=activity.innerText;
        let background = `background-image: url('images/schedule/${activity.innerText}.png');`
        planing.setAttribute("style",background)
        list.innerHTML=""

        db.collection("activities").onSnapshot(snap => {
            snap.docChanges().forEach(act => {
                let date = document.createElement("div");
                date.setAttribute("class","btn-group dropleft my-2 ml-1")
                list.append(date)
               if(title.innerText == act.doc.data().title){
                  let btn = document.createElement("button");
                  btn.setAttribute("type","button")
                  btn.setAttribute("class","btn btn-warning btn-sm px-4 dropdown-toggle")
                  btn.setAttribute("data-toggle","dropdown")
                  btn.innerText=act.doc.data().name;
                  date.append(btn)
                  
                  let div = document.createElement("div");
                  div.setAttribute("class","dropdown-menu")
                  date.append(div);
                  for(let i=0;i<act.doc.data().dates.length;i++){
                  let h6 = document.createElement("h6");
                    h6.innerText=act.doc.data().dates[i].toDate().toGMTString();
                    div.append(h6);
                   }
                   



                } 
            })})
        
    })
})

