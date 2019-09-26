// Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn:
//    Vật lý, Hóa học, và Sinh học. Sau đó hiển thị điểm trung bình và tổng của những điểm này.
function getAverage() {
    let tb, hh, sh, vl;
    vl = parseInt(document.getElementById('vl').value);
    hh = parseInt(document.getElementById('hh').value);
    sh = parseInt(document.getElementById('sh').value);
    tb = (hh + sh + vl)/3;

    document.getElementById('tb').value=tb;
}