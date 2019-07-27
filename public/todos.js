$(()=>{
    let newTodoBox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todoList = $('#todolist')
 
    $(addtodoBtn).click(function (e) { 
        e.preventDefault();

        let list=newTodoBox.val()

      $.post('/todoo',
      {task:list},
      function(data){
           todoList.empty();

           for(i=0;i<data.length;i++){
            todoList.append("<li>"+data[i].task+"</li>");

           }
           
        
      }
      )
        
    });
    
})