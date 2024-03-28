//это основное
const users  = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];

  users.forEach(users => {
    users.admin = false;
    
  });


  //это доп дз
  const targetUserId = 3;
  const targetUser = 
  users.find((users)=> users.id === targetUserId);

  if(targetUser) {
    targetUser.admin = true;
  }else{
    console.log("Object with ID", targetUserId , "not found.");
  }

console.log(users);
