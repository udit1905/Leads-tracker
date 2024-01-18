
let inputBtn = document.getElementById("input-btn")
let myLeads = []
let oldLeads = []
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let deleteBtn = document.getElementById("delete-btn")
let tabBtn = document.getElementById("tab-btn")
 const tabs = [
    {url: "https://www.linkedin.com/in/per-herald-borgen/"}
] 
let LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(LeadsFromLocalStorage)
    {
        myLeads = LeadsFromLocalStorage
        render(myLeads)
    }
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value =""
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    render(myLeads)
}) 

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true , currentWindow: true} , function(tabs){
        myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads" , JSON.stringify(myLeads))
      render(myLeads)
    })

    
})
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
function render(leads)
{
let listItems = "";
for(let i = 0 ; i < leads.length ; i++)
{
    listItems += 
               `<li>
                    <a href='${leads[i]}' target='_blank'>
                        ${leads[i]}
                    </a>
                </li>`;

   const li = document.createElement("li");
   li.textContent = leads[i];
   ulEl.append(li); 
}
ulEl.innerHTML = listItems;
}





