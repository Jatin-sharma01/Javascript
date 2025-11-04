function showCallFunc(fn) {
    let a = 10;
    fn(a)
}
showCallFunc(function fn(b){
    console.log(b)
})