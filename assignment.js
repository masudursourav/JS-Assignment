function kilometerToMeter(km) {
    if (km < 0) {
        console.log("Value cannot be negetive");
    } else {
        return km * 1000;
    }
}

var km = 25;
var meter = kilometerToMeter(km);
console.log(meter);





function bugetCalculator(clock, phone, laptop) {
    if (clock < 0 || phone < 0 || laptop < 0) {
        console.log("Value cannot be negetive");
    } else {
        return clock * 50 + phone * 100 + laptop * 500;
    }
}

var clock = 5;
var phone = 10;
var laptop = 10;
var buget = bugetCalculator(clock, phone, laptop);
console.log(buget);



function hotelCost(days) {
    if (days < 0) {
        console.log("Value cannot be negetive");
    } else {
        if (days <= 10) {
            return days * 100;
        } else if (days <= 20) {
            return (10 * 100) + ((days - 10) * 80);
        } else {
            return (10 * 100) + (10 * 80) + ((days - 20) * 50);
        }
    }
}

var days = 22;
var cost = hotelCost(days);
console.log(cost);




function megaFriend(friends) {
    var max = 0;
    var friend = "";
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > max) {
            friend = friends[i];
            max = friends[i].length;
        }
    }
    return friend;
}


var name = ["kalim", "jolim", "Sobuluddin", "mofiz"];
var maxfriend = megaFriend(name);
console.log(maxfriend);