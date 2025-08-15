function showCallFunc(fn){
    const value = 10;
    fn(value)
}
showCallFunc(function (value){
    console.log(value)
})