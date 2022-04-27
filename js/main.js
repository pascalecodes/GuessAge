//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('#boredButton').addEventListener('click', getBored)
document.querySelector('#happyButton').addEventListener('click', getCelebrate)

function getFetch(){
  const name = document.querySelector('input').value
  console.log(name)
  const url = `https://api.agify.io/?name=${name}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data) 
        document.querySelector('h2').innerText = `${data.name} your age is ${data.age}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//Get bored suggestion
function getBored(){
  const url = 'http://www.boredapi.com/api/activity/'
  document.querySelector('img').src = ''

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const activityMessage = data.activity;
      // activityMessage.style.color = "green";
      document.querySelector('h3').innerText = `Of course we can't guess your age from just your name, since you are bored I have a suggestion for how to stay busy:`
      document.querySelector('.activity').innerText=data.activity
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

//Get right reaction
function getCelebrate(){
  document.querySelector('h3').innerText = `HIP HIP HORRAY`
  // document.querySelector('.activity').innerHTML= 
  const image= '/Users/pdelaunalab/Downloads/class27-materials/guessAge/img/celebration.gif'
  document.querySelector('img').src = image
  document.querySelector('.activity').innerText=''

}
