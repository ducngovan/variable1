function getbk(){
    let bk, cv;
    const pi = 3.14;
    bk=parseInt(document.getElementById('bk').value);
    cv = 2 * bk * pi;
    document.getElementById('result').value=cv;
}