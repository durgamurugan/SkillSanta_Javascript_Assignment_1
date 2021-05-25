function myAgeValidation() {
 
    var lre = /^\s*/;
    var datemsg = "";
    
    var inputDate = document.as400samplecode.myDate.value;
    inputDate = inputDate.replace(lre, "");
    document.as400samplecode.myDate.value = inputDate;
    datemsg = isValidDate(inputDate);
        if (datemsg != "") {
            alert(datemsg);
            return;
        }
        else {
            //Now find the Age based on the Birth Date
            getAge(new Date(inputDate));
        }
 
}
 
function getAge(birth) {
 
    var today = new Date();
    var nowyear = today.getFullYear();
    var nowmonth = today.getMonth();
    var nowday = today.getDate();
 
    var birthyear = birth.getFullYear();
    var birthmonth = birth.getMonth();
    var birthday = birth.getDate();
 
    var age = nowyear - birthyear;
    var age_month = nowmonth - birthmonth;
    var age_day = nowday - birthday;
    
    if(age_month < 0 || (age_month == 0 && age_day <0)) {
            age = parseInt(age) -1;
        }
    alert(age);
    
    if (age > 18 &&  age < 44) {
        window.open('https://selfregistration.cowin.gov.in', '_blank');
    }
    else {
        alert("You are not eligible to take the vaccine!!!");
    }
 
}
 
function isValidDate(dateStr) {
 
    
    var msg = "";
    var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
 
    var matchArray = dateStr.match(datePat); 
    if (matchArray == null) {
        msg = "Date is not in a valid format.";
        return msg;
    }
 
    month = matchArray[1]; 
    day = matchArray[3];
    year = matchArray[4];
 
    
    if (month < 1 || month > 12) { 
        msg = "Month must be between 1 and 12.";
        return msg;
    }
 
    if (day < 1 || day > 31) {
        msg = "Day must be between 1 and 31.";
        return msg;
    }
 
    if ((month==4 || month==6 || month==9 || month==11) && day==31) {
        msg = "Month "+month+" doesn't have 31 days!";
        return msg;
    }
 
    if (month == 2) { 
    var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
    if (day>29 || (day==29 && !isleap)) {
        msg = "February " + year + " doesn't have " + day + " days!";
        return msg;
    }
    }
 
    if (day.charAt(0) == '0') day= day.charAt(1);
    
    return msg;  
}
 

 