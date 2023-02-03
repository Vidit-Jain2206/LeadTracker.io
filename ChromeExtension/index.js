





// let myLeads=`["www.google.com"]`
// myLeads=JSON.parse(myLeads);
// myLeads.push("www.amazon.com");
// console.log(myLeads);

// myLeads=JSON.stringify(myLeads);
// console.log(myLeads);
// console.log(typeof myLeads);
// localStorage.setItem("myLeads","www.google.com");
// console.log(localStorage.getItem("myLeads"));


let myLeads=[];
const input_el=document.getElementById("input_el");
const input_btn=document.getElementById("input_btn");
const delete_btn=document.getElementById("delete_btn");
const tab_btn=document.getElementById("tab_btn");
const ul_el=document.getElementById("ul_el");
const leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"));






if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}


tab_btn.onclick=function() {
    chrome.tabs.query({active: true , currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        render(myLeads);
    })
    
}



function render(leads){
    let listItems="";
    for (let index = 0; index < leads.length; index++) {
        // listItems+="<li><a target='_blank' href='" + myLeads[index] + "'>" + myLeads[index] + "</a></li>";
        listItems+= `
            <li>
               <a target='_blank' href="${leads[index]}">
               ${leads[index]}
               </a>
            </li>`;
    }
    ul_el.innerHTML=listItems;  

}


input_btn.onclick=function (){
    myLeads.push(input_el.value);
    input_el.value="";

    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
    
    
}

delete_btn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})


// for (let index = 0; index < myLeads.length; index++) {
//     // ul_el.innerHTML+="<li>"+ myLeads[index] + "</li>";

//     const li=document.createElement("li");
//     li.textContent=myLeads[i];
//     ul_el.append(li);
// }


