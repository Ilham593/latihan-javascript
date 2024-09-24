function getPilihanKomputer(){
	const comp = Math.random();
	if(comp < 0.34) return 'gajah';
	if(comp >= 0.34 && comp < 0.67) return 'orang';
	return 'semut';
}

function getHasil(comp, player) {
	if(player == comp) return 'seri'
	if(player == 'gajah') return (comp == 'orang') ? 'menang' : 'kalah'
	if(player == 'orang') return (comp == 'gajah') ? 'kalah' : 'menang'
	if(player == 'semut') return (comp == 'orang') ? 'kalah' : 'menang'
}

const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(pil){
	pil.addEventListener('click', function(){
	    const pilihanComputer = getPilihanKomputer();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanComputer, pilihanPlayer);
        console.log(pilihanComputer, pilihanPlayer, hasil);
		const info = document.querySelector('.info');
        info.innerHTML = hasil
	})
})

