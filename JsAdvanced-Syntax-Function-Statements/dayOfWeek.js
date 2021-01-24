function dayOfWeek(string) {
    let array = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    let index = array.indexOf(string);
    if(index != -1){
        console.log(index + 1);
    }else{
        console.log(`error`);
    }
}
dayOfWeek('Mondays')