function moveLeft(){
    document.getElementById('dog').querySelector('img').style.display = 'none';
    document.getElementById('cat').querySelector('img').style.display = '';
    document.getElementById('dog').style.width = '100px';
    document.getElementById('cat').style.width = '800px';
}
function moveBoth(){
    document.getElementById('dog').querySelector('img').style.display = '';
    document.getElementById('cat').querySelector('img').style.display = '';
    document.getElementById('dog').style.width = '450px';
    document.getElementById('cat').style.width = '450px';
}
function moveRight(){
    document.getElementById('cat').querySelector('img').style.display = 'none';
    document.getElementById('dog').querySelector('img').style.display = '';
    document.getElementById('cat').style.width = '100px';
    document.getElementById('dog').style.width = '800px';
}

