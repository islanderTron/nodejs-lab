// const express = require('express');
// const router = express.Router();

// Do work here
// router.get('/', (req, res) => {
	// console.log("Hey!!!");
	// res.send('Hey! It works!');


	// const wes = {name: 'Wes', age: 100, cool: true};
	/*
	*  json(object) would display the JSON on the webpage
	*/
	// res.json(wes)  

	// res.json(req.query);

	//  Request to send the data for the query name
	// res.send(req.query.name); 
	//  Type the url like this: http://localhost:7777/?name=Paul and would print "Paul" on webpage 

// 	res.render('hello', {
// 		// Local variables 
// 		dog: 'keltian',
// 		name: req.query.name,
// 		dog: req.query.dog,
// 		title: 'I love food' 
// 	});
// });

/*	You can write like this: http://localhost:7777/reverse/paul
*	get() is a method to receive the data from URL 
*/
// router.get('/reverse/:name', (req, res) =>{
	// res.send('it works!');
	// res.send(req.params.name);

	/*
	* Reverse the word
	* Ex: Hello = olleH
	*/
// 	const reverse = [...req.params.name].reverse().join('');
// 	res.send(reverse);
// });


// You created a controller (/controllers/storeController.js) file which you dont need above


const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController.js');

// router.get('/', storeController.myMiddleware, storeController.homepage);

router.get('/', storeController.homepage);

// router.get('/add', storeController.addStore); CONTINUE 


module.exports = router;
// console.log(router);















