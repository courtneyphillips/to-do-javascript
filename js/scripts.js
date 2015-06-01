$(document).ready(function(){
  $("form#new-task").submit(function(event){
    event.preventDefault();
    var taskName = $("input#task-name").val();
    var dueDate = $("input#due-date").val();
    var taskDescription = $("input#task-description").val();
    var completed = false;

    var newTask = { taskName: taskName, dueDate: dueDate, taskDescription: taskDescription, completed: completed };

    $("ul#tasks").append("<li id=" + newTask.taskName + "><span class='task'>" + newTask.taskName + "</span><span class='delete'> x - mark done </span></li>");

    $(".task").last().click(function(){
      $("#show-task").show();
      $(".task-name").text(taskName);
      $(".due-date").text(newTask.dueDate);
      $(".task-description").text(newTask.taskDescription);
      $(".done").text(newTask.completed);
    });
    //
    $(".delete").click(function(){
      $("#show-task").hide();
      $(this).parent().remove();
    });

  });
});
