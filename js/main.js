//Example fetch using agify api, bored api and advice slip api
document.querySelector('#bdayButton').addEventListener('click', getAge)
document.querySelector('#boredButton').addEventListener('click', getBored)
document.querySelector('#happyButton').addEventListener('click', getCelebrate)
document.getElementById('fortuneButton').addEventListener('click', getAdvice)
// document.querySelector('#fortuneButton').addEventListener('click',getAdvice)
function clearContent(){
  // let boreMessage= document.querySelector("#bored").innertText = null
  let activtyMessage= document.querySelector(".activity").innertText = null
  let celebrateMessage = document.querySelector("#celebrate").innerText = null
  let celebrateImage= document.querySelector('img').src = ''
  let fortuneMessage= document.querySelector('#fortune').innerText= null


}



function getAge(){
  const name = document.querySelector('input').value
  console.log(name)
  const url = `https://api.agify.io/?name=${name}`
  clearContent()

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data) 
        document.getElementById('age').innerText = `${data.name.toUpperCase()} your age is ${data.age}`;
        console.log(data.age) 
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//Get bored suggestion
function getBored(){
  const url = 'http://www.boredapi.com/api/activity/'
  //document.querySelector('img').src = ''
  clearContent()

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let activityMessage = data.activity;
      // activityMessage.style.color = "green";
      let boredIntro = `ZORO guessed your SOUL age but you seem bored ZORO has a suggestion for how to you can stay busy:`
      document.querySelector('#bored').innerText = boredIntro;
      document.querySelector('.activity').innerText= `${activityMessage}`;
      
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

//Get right reaction
function getCelebrate(){
  clearContent()
  document.querySelector("#celebrate").innerText = `HIP HIP HORRAY`
  // document.querySelector('.activity').innerHTML= 
  const image= '/Users/pdelaunalab/Desktop/gitrepo/api_miniapps/guessAge/img/celebration.gif'
  document.querySelector('img').src = image
  document.querySelector('.activity').innerText=''
  // document.getElementById('#bored').innertText = ''
  // document.querySelector(".activity").innertText = ' '

}

//get fortune
function getAdvice(){
  // let adviceResult= ''
  const url = 'https://api.adviceslip.com/advice'
  // document.querySelector("#bored").innertText = ' '
  // document.querySelector(".activity").innertText = ' '
  // document.querySelector("#celebrate").innerText = ' '
  // document.querySelector('img').src = ' '
  clearContent()

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const adviceResult = data.slip.advice
      // activityMessage.style.color = "green";
      document.querySelector('#fortune').innerText = adviceResult;
      document.querySelector('.activity').innerText=''
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
  // document.querySelector('h3').innerText = adviceResult
}
