const jokeEl = document.getElementById('joke');
const jget_joke = document.getElementById('get_joke');

get_joke.addEventListener('click',generateJoke);
generateJoke();

async function generateJoke() {
	const jokeRes = await fetch('https://v2.jokeapi.dev/joke/Any?lang=es&type=single', {
		headers: {
			'Accept': 'application/json'
		}
	});
	const joke = await jokeRes.json();
	jokeEl.innerHTML = joke.joke;
}