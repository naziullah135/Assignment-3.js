//Q-1:Convert Distance Unit Kilometer To Meter:-

function kilometerToMeter(km){
    if(km<1){
        console.log("Your input is unvalid");
    }
    else 
        return km*1000;

}
var result = kilometerToMeter(6);
console.log(result);


//Q-2:budget calculation:-

function budgetCalculator(){
    
}


//Q-3:hotelCost calculation:

function hotelCost(days){
    var rent = 0;
    if(days<=10){
        var rent = days*100;
    }
    else if(days<=20){
        var first10 = 10*100;
        var remaining = days - 10;
        var second10 = remaining*80;
        rent = first10 + second10;
    }
    else{
        var first10 = 10*100;
        var second10 = 10*80;
        var remaining = days-20;
        var third10 = remaining*50;
        rent = first10 + second10 + third10;
    }
    return rent;

}
var totalRent = hotelCost(15);
console.log(totalRent);


//Q-4:Find a largest name in a array:-

function megaFriend(name){
    var maxName = name[0];
    for(var i=0; i< name.length; i++){
        var element = name[i];
       if(element.length>maxName.length){
           maxName = element;
       }
    }
    return maxName;
}
var bigfriend = megaFriend(["selim", "arafat", "abdullah", "kotha"]);
console.log(bigfriend);