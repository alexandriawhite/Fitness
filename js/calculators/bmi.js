// // const fetch = require('node-fetch');

// const bmiURL = 'https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=150&height=68';

// const bmi = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
//     'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
//   }
// };

// fetch(bmiURL, bmi)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));



//BMI Calculator
function bmiCalc() {

  $('#submitBTN').on('click', function(event) {
      event.preventDefault();

      $('#results').empty();

      let age = $('#age').val();
      let height = $('#height').val();
      let weight = $('#weight').val();

      console.log(age);
      console.log(height);
      console.log(weight);

      const settings = {
          async: true,
          crossDomain: true,
          url: 
          // `https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=${weight}&height=${height}`,
          `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`,
          method: "GET",
          headers: {
            'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
            'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
          }
      }
      
      $.ajax(settings).done(function (response) {
          console.log(response);

          let bmi = response.bmi;
          let health = response.health;
          let range = response.healthy_bmi_range;
          console.log(bmi);
          console.log(health);
          console.log(range);

          //results
          $('#results-head').html('<hr>');
          $('#results-head').append('<h3>Your BMI!</h3>');
          $('#results').append('<hr>');
          $('#results').append('<p class="lead"><b>BMI: </b>' + bmi.toFixed(2) + '</p>');
          $('#results').append('<p class="lead"><b>Overall Health: </b>' + health + '</p>');
          $('#results').append('<p class="lead"><b>Healthy BMI Range: </b>' + range + '</p>');
      });
  
  });

};
// run Bmi calc
bmiCalc();




    
// fetch('https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=150&height=68', {
//     method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
//     'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
// },
// })
// .then(response => response.json())
// .then(json => console.log(json))