function getMovedon(){
    let oc, of;
    oc = parseInt(document.getElementById('oc').value);
    of = (oc * 1.8) +32;
    document.getElementById('of').value = of;

}