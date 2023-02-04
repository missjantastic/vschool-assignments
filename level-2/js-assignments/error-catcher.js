function sum(x, y){
    if (typeof x !== 'number'){
        throw new Error(`${x} is not of type 'number'`);
    }
    if (typeof y !== 'number'){
        throw new Error(`${y} is not of type 'number'`);
    }
    return x + y;
}

/* Incorrect parameters-- should throw error when uncommented */
// try{
//     sum("1","2")
// } catch(err) {
//     console.log(err);
// }

var user = {username: "sam", password: "123abc"};
function login(username, password){
  if (username !== user.username || password!== user.password){
    throw new Error('Username or password is incorrect')
  } else {
    console.log('Login successful!')
  }
}

/* Incorrect password-- should throw error when uncommented */
// try{
//     login("sam", "123");
// } catch(err) {
//     console.log(err);
// }

/* Incorrect username -- should throw error when uncommented */
// try{
//     login("sad", "123abc");
// } catch(err) {
//     console.log(err);
// }

/* Succesful login attempt. Should not throw any errors */
try{
    login("sam", "123abc");
} catch(err) {
    console.log(err);
}