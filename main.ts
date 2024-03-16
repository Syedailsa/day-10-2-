let userName: string[] = [
    "admin",
    "user1",
    "user2",
    "user3",
];

userName.forEach(userName=> {
    if(userName == "admin"){
        console.log("hello admin, want to cheack the updates?")
   }else{
    console.log(`hi their ${userName}, thankyou for logging in again`)
   } })