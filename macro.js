// const fetch = require('node-fetch');

const macroURL = 'https://fitness-calculator.p.rapidapi.com/macrocalculator?age=25&gender=male&height=180&weight=70&activitylevel=5&goal=extremelose';

const macro = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

fetch(macroURL, macro)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));