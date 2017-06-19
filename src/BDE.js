var arrayDate = ["12.06.2017", "12.06.2017", "16.06.2017", "23.06.2017", "02.10.2017"];

console.log(arrayDate);

function arrayFind(dayWanted){
    for (var i=0, flag = false; flag == true || i == arrayDate.length; i++){
        if (dayWanted == arrayDate[i]){
            flag = true;
            dayWantedI = i;
        }
    }
    if (flag == false){
        console.log("Not find date")
    }
}

/*
function arrayEdit(oldDay, newDay){

}

*/