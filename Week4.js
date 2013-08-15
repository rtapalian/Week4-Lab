			/*Richard Tapalian
			  SE240 Javascript
			  Week 4 Lab
			  08/14/2013
			 */
			/*Variable data entered into a JSON*/
			var  data = {
				'title': "",
				'mousex':[],
				'mousey':[],
				'name':"",
				'email':"",
				'innerHeight':"",
				'innerWidth':"",
				'navigator':""
				};
				
			/*This function sends the results of the data entered into the JSON to the console log*/
			function showResults() {
				console.clear();
				console.log(data);
			}
			var results = document.getElementById('showResults');
			results.addEventListener("click", showResults);
			
			/*Displays the arrays for mousex and mousey*/
			function hello(e){
			console.log(e);
			}
			
			/*Loads data whent he user loads the window for the data specified*/
			function onWindowLoad() {
			data.title=document.title;
			data.innerHeight=window.innerHeight;
			data.innerWidth=window.innerWidth;
			data.navigator=window.navigator.userAgent;	
			}
			/*This is the event listener that reads the data on window load*/
			window.addEventListener('load', onWindowLoad);
			
			/*This function is an event listener that reads and loads x and y coordinates into the arrays*/
			function onMouseMove(e){
			data.mousex.push(e.clientX);
			data.mousey.push(e.clientY);
				
				/*This if statement reads x and y coords till 100 are reached then stops the event listener*/
				if (data.mousex.length >= 100) {
				document.removeEventListener('mousemove', onMouseMove);
				}
			}	
			document.addEventListener('mousemove', onMouseMove);
				
			/*These functions get the data of fullname and email from the form*/	
			var fullname = document.getElementById('fullname');
			var email = document.getElementById('email');
			function onNameKeyUp(){
			data.name = fullname.value;
			data.email = email.value;
			}
			fullname.addEventListener ('keyup', onNameKeyUp);
			email.addEventListener ('keyup', onNameKeyUp);
			
			/*This function blurs or removes focus from the text boxes after the mouse has moved on*/
			function blurEventName(){
			data.name=fullname.value;
			}
			fullname.addEventListener('blur', blurEventName);
			
			function blurEventEmail(){
			data.email=email.value
			}
			email.addEventListener ('blur', blurEventEmail);
			
