var myDataRef = new Firebase('https://brilliant-heat-2699.firebaseio.com/'); //creates reference to Firebase database

//start creating a user
function registerFxn(){ console.log("Registering user..");
	myDataRef.createUser({
		email    : document.getElementById('USERNAME').value,
		password : document.getElementById('PASSWORD').value
}, function(error, userData) {
		if (error) {
			 console.log("Error creating user:", error);
		} else {
		console.log("Successfully created user account with uid:", userData.uid);
	}
});
}
//end creating a user

//start log the user in
function loginFxn(){console.log("Logging in..");
	myDataRef.authWithPassword({
		email    : document.getElementById('USERNAME').value,
		password : document.getElementById('PASSWORD').value
	}, function(error, authData) {
			if (error) {
			console.log("Login Failed!", error);
			} else {
			console.log("Authenticated successfully with payload:", authData);
			}
});
}
//end log the user in



//start setting data
/*var usersRef = myDataRef.child("users"); //reference to users in our database
usersRef.set({
			user1: {
				date_of_birth: "09/10/11",
				full_name: "First User"
			},
			user2: {
				date_of_birth: "01/02/03",
				full_name: "Second User"
			}
			},function(error) { //verify that the write worked
 			if (error) {
    			alert("Data could not be saved." + error);
  			} else {
    			alert("Data saved successfully.");
  			}
		});
		*/
//end setting data