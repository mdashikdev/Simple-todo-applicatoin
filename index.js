var todoform=document.querySelector('.todoinput');
var todoinput=todoform.querySelector('input');
var todoleftUl=document.querySelector('.ul_leftContainer');
var todorightUl=document.querySelector('.ul_righContainer');

todoform.addEventListener("submit",function(e){
    e.preventDefault();

    if (todoinput.value !== "" && todoinput.value !== null) {
        addtask(todoinput.value);
    }else{
        alert("Empty Field")
    }
    
})


function create_task(todotext){
    var create_li=document.createElement("li");
    var create_checkbox=document.createElement("input");
    var lebel=document.createElement("lebel");

    create_checkbox.type="checkbox";
    lebel.innerText=todotext;

    create_li.appendChild(create_checkbox);
    create_li.appendChild(lebel);
    
    return create_li;
}

function create_complete_task(todotext){
    var create_li=document.createElement("li");
    var create_checkbox=document.createElement("input");
    var lebel=document.createElement("lebel");

    create_checkbox.type="button";
    create_checkbox.value="Delete";
    create_checkbox.id="dltbtn";


    lebel.innerText=todotext;

    create_li.appendChild(create_checkbox);
    create_li.appendChild(lebel);
    
    return create_li;
}


function addtask(todotext) {
    let listitem=create_task(todotext);
    todoleftUl.appendChild(listitem);
    todoinput.value="";

    let checkbox=listitem.querySelector("input[type='checkbox']");
    checkbox.onchange=completetask;


    function completetask() {
        let conf=confirm("Are you sure?");
        if (conf) {
            let comtask=create_complete_task(todotext);
            todorightUl.appendChild(comtask);
            let btn=comtask.querySelector('#dltbtn');

            btn.addEventListener("click",()=>{
                let conmsg=confirm("Are you sure to permanent delete this item?");
                if (conmsg) {
                    comtask.remove();
                }
            })

            listitem.remove();
        }else{
            checkbox.checked=false;
        }
        
    }
}

