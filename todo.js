var addTodo = function() {
  var todoInput = $(".todoInput").val();
  $(".todo").append('<p> <input type="radio">' + todoInput + '</p>');
  $(".todoInput").val("");
}

var removeTodo = function(x) {
  var todo = $(x).parent("p").css("text-decoration", "line-through");
  $(".done").append(todo);
}


$("button").click(e => addTodo())

$("input").bind('keypress', function(e) {
  if(e.keyCode==13) {
    addTodo();
    return false;
  };
});

$(".todo").on("click", "input", function() {
  removeTodo(this);
});
