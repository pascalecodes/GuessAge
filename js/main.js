//Example fetch using agify api, bored api and advice slip api
document.querySelector('#bdayButton').addEventListener('click', getAge)
document.querySelector('#boredButton').addEventListener('click', getBored)
document.querySelector('#happyButton').addEventListener('click', getCelebrate)
document.querySelector('#fortuneButton').addEventListener('click', getAdvice)
// document.querySelector('#fortuneButton').addEventListener('click',getAdvice)
function clearContent(){
  // let boreMessage= document.querySelector("#bored").innertText = null
  let defaultBoreMessage= document.querySelector('#bored').classList.add('hidden')
  let activtyMessage= document.querySelector('#activity').classList.add('hidden')
  let celebrateMessage = document.querySelector('#celebrate').classList.add('hidden')
  let celebrateImage= document.querySelector('img').classList.add('hidden')
  let fortuneMessage= document.querySelector('#fortune').classList.add('hidden')
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
      document.querySelector('#activity').innerText= `${activityMessage}`;
      document.querySelector("#celebrate").innerText = ''
      document.querySelector('img').src = ''
      
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
  document.querySelector('img').src = image;
  document.querySelector('#activity').innerText=' ';
  document.querySelector('#bored').innerText = ' ';
 

}

//get fortune
function getAdvice(){
  // let adviceResult= ''
  const url = 'https://api.adviceslip.com/advice'
  // document.querySelector("#bored").innertText = ' '
  // document.querySelector(".activity").innertText = ' '
  // document.querySelector("#celebrate").innerText = ' '
  // document.querySelector('img').src = ' '
  //clearContent()
  // fortuneMessage= document.querySelector('#fortune').classList.toggle('hidden')

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const adviceResult = data.slip.advice
      // activityMessage.style.color = "green";
      
      document.querySelector('#fortune').innerText = adviceResult;
      document.querySelector('#activity').innerText=''
    
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
  // document.querySelector('h3').innerText = adviceResult
}




// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

// document.querySelector('#andiNext').addEventListener('click', andiNext)
// document.querySelector('#claireNext').addEventListener('click', claireNext)
// document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// function claireNext(){
// 	claire.classList.toggle('hidden')
// 	andi.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// }