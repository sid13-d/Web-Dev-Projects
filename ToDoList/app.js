document.querySelector('#push').onclick = function () {
    if(document.querySelector('#newtask input').value.length == 0) {
        alert('please enter something');
    }
    else {
        let data = document.querySelector('#newtask input').value
        document.querySelector('#tasks').innerHTML 
        += `
        <div class="task">
            <span class="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
            <img src="https://img.icons8.com/material-outlined/20/ffffff/trash--v2.png"/>
            </button>
        </div>
        `;
        
        let erase = document.querySelector('#newtask input').value = "";

        let cur_task = document.querySelectorAll(".delete");
        for(let i=0; i<cur_task.length;i++) {
           cur_task[i].onclick = function() {
               cur_task[i].parentNode.remove();
           }
            
        }
        
        let task = document.querySelectorAll(".task");
        for(let i=0;i<task.length;i++) {
            task[i].onclick = function() {
                this.classList.toggle('completed');
            }
        }
        
    }
    
}
