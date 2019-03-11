//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
	var donationAmount = prompt("How much would you like to donate?");
	
	if (donationAmount < 100) {
		
	} else if (donationAmount >= 100) {
		
	}
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
	var churchillNav = document.getElementById('ConsoleDisplay');
	
	churchillNav.innerHTML = ('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '.' + ' <br />');

  if(speechesArray[0].yearIsBCE === true){
    churchillNav.innerHTML += ('This speech took place before the common era.' + ' <br />');
  }else{
    churchillNav.innerHTML += ('This speech took place during the common era.' + ' <br />');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    churchillNav.innerHTML += ('This is the oldest speech on the page.');
  }
  if(speechesArray[0].year === newest){
    churchillNav.innerHTML += ('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
	var ghandiNav = document.getElementById('ConsoleDisplay');
	
	ghandiNav.innerHTML = ('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '.' + ' <br />');

  if(speechesArray[1].yearIsBCE === true){
    ghandiNav.innerHTML += ('This speech took place before the common era.' + ' <br />');
  }else{
    ghandiNav.innerHTML += ('This speech took place during the common era.' + ' <br />');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    ghandiNav.innerHTML += ('This is the oldest speech on the page.');
  }
  if(speechesArray[1].year === newest){
    ghandiNav.innerHTML += ('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
	var demosthenesNav = document.getElementById('ConsoleDisplay');
	
	demosthenesNav.innerHTML = ('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + '.' + ' <br />');

  if(speechesArray[2].yearIsBCE === true){
    demosthenesNav.innerHTML += ('This speech took place before the common era.' + ' <br />');
  }else{
    console.log('This speech took place during the common era.' + ' <br />');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    demosthenesNav.innerHTML += ('This is the oldest speech on the page.');
  }
  if(speechesArray[2].year === newest){
    demosthenesNav.innerHTML += ('This is the most recent speech on the page.');
  }
});