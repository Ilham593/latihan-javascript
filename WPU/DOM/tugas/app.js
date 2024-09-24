const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
	let h1 = document.getElementById('h1')
	h1.style.color	= '#3f3f3f'
	document.body.classList.toggle('red-bg')
})


const btnRandom = document.createElement('button');
btnRandom.textContent = 'Random Color';
btnRandom.style.color = 'black';
btnRandom.style.fontSize = '15px';
btnRandom.style.padding = '5px 8px';
btnRandom.style.borderRadius = '5px';
btnRandom.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.5)';
btnRandom.setAttribute('type', 'button');
btn.after(btnRandom)

btnRandom.addEventListener('click', function () {
	const r = Math.floor(Math.random() * 255 + 1);
	const g = Math.floor(Math.random() * 255 + 1);
	const b = Math.floor(Math.random() * 255 + 1);

	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	
})


const redRange = document.querySelector('input[name = merah]');
const greenRange = document.querySelector('input[name = hijau]');
const blueRange = document.querySelector('input[name = biru]');

function ubahWarna(){
	const red = redRange.value;
	const green = greenRange.value;
	const blue = blueRange.value;

	const color = `rgb(${red}, ${green}, ${blue})`;
	document.body.style.backgroundColor = color;
}

redRange.addEventListener('input', ubahWarna);
greenRange.addEventListener('input', ubahWarna);
blueRange.addEventListener('input', ubahWarna);

document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;

    const red = Math.floor((x / window.innerWidth) * 255);
    const green = Math.floor((y / window.innerHeight) * 255);
    const blue = Math.floor(Math.random() * 255);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
