function getAcreage() {
    let bk, dt;
    const pi = 3.14;

    bk = parseInt(document.getElementById('bk').value);
    dt = pi * bk * bk;
    document.getElementById('result').value = dt;

    // alert(pi*a*a);
    
}