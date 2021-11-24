const badgesAndEdit = document.querySelector(".list-group");
badgesAndEdit.addEventListener('click',function(evt){
    evt.preventDefault();
    if(evt.target.innerHTML==="Completed"){
        evt.target.innerHTML="Due";
        evt.target.classList.remove('badge-success');
        evt.target.classList.add('badge-danger');        
    }
    else if(evt.target.innerHTML==="Due"){
        evt.target.innerHTML="Completed";
        evt.target.classList.remove('badge-danger');
        evt.target.classList.add('badge-success');
    }
    else{
        const target = evt.target;
        console.dir(target);
        if(target.outerHTML==='<i class=\"btn far fa-edit\"></i>'||target.outerHTML==="<i class=\"btn btn-lg fas fa-check\"></i>"){
            const listEdit = target.offsetParent;
            const edit = listEdit.querySelector(".edit");
            const done = listEdit.querySelector(".done");
            edit.classList.toggle("d-none");
            done.classList.toggle("d-none");
            const temp = done.querySelector(".name").textContent;
            done.querySelector(".name").textContent=edit.querySelector("input").value;
            edit.querySelector("input").value=temp;
            
        }
    }
})

const add = document.querySelector(".add");
add.addEventListener('click',function(evt){
    evt.preventDefault();
    document.querySelector(".buttons").classList.add('d-none');
    document.querySelector(".onadd").classList.remove('d-none');
})

const cancel = document.querySelector(".calcel");
cancel.addEventListener('click',function(evt){
    evt.preventDefault();
    document.querySelector(".buttons").classList.remove('d-none');
    document.querySelector(".onadd").classList.add('d-none');  
})

const submit = document.querySelector(".submit");
submit.addEventListener('click',function(){
    evt.preventDefault();
    const newItem = document.querySelector("#newItem");
    const newListItem = document.createElement("li");
    newListItem.classList="list-group-item d-flex justify-content-between align-items-center";
    newListItem.innerHTML= '<div class="edit d-none"><input type="text"><i class="btn btn-lg fas fa-check"></i></div><div class="done"><t class="name"></t> <i class="btn far fa-edit"></i> </div><span class="btn badge badge-danger badge-pill">Due</span>';
    newListItem.querySelector('t').innerHTML=newItem.value;
    newItem.value="";
    document.querySelector(".list-group").append(newListItem);
    document.querySelector(".buttons").classList.remove('d-none');
    document.querySelector(".onadd").classList.add('d-none');
})
const edit = document.querySelector(".edit");
const done = document.querySelector(".done");
const editEvent = document.querySelector(".fa-edit");
const checkEvent = document.querySelector(".fa-check");
const editValue = done.innerText;
editEvent.addEventListener("click",function(){
    evt.preventDefault();
    edit.classList.toggle("d-none");
    edit.querySelector("input").value=editValue;
    done.classList.toggle("d-none");
    })
checkEvent.addEventListener("click",function(){
    evt.preventDefault();
    edit.classList.toggle("d-none");
    done.querySelector(".name").textContent=edit.querySelector("input").value;
    done.classList.toggle("d-none");
})

const removeCompleted = document.querySelector(".delete");
removeCompleted.addEventListener("click",function(evt){
    evt.preventDefault();
    const lis = document.querySelectorAll(".list-group-item");
    //console.log(lis);
    for(let i=0;i<lis.length;i++){
        const li=lis[i];
        if(li.querySelector("span").innerHTML==="Completed"){
            li.parentNode.removeChild(li);
        }
    }
})

const searchSubmit = document.querySelector(".searchSubmit");
searchSubmit.addEventListener("click",function(evt){
    evt.preventDefault();
    const lis = document.querySelectorAll(".list-group-item");
    const searchValue = document.querySelector(".search").value.trim();
    for(let i =0;i<lis.length;i++){
        const li=lis[i];
        const text=li.querySelector("t");
        const textString = text.innerText;
        //console.log(textString);
        let len = searchValue.length;
        if(len>textString.length||len===0||len==1)   continue;
        else{
            for(let j=0;j<=textString.length-len;j++){
                if(textString.substr(j,len).toLowerCase()===searchValue.toLowerCase()){
                    text.style.backgroundColor="yellow";
                }
            }
        }
    }
})
const clear = document.querySelector(".clear");
clear.addEventListener("click",function(){
    evt.preventDefault();
    const lis = document.querySelectorAll(".list-group-item");
    for(let i = 0;i<lis.length;i++){
        const li=lis[i];
        li.querySelector("t").style.backgroundColor="white";
    }
})
