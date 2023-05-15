function calculateAge(){
    //Inputs
    const dayInput = document.getElementById("day-input");
    const monthInput = document.getElementById("month-input");
    const yearInput = document.getElementById("year-input");

    //Estimated age
    const ageText = document.getElementById("estimatedYears");
    const monthsText = document.getElementById("estimatedMonths");
    const daysText = document.getElementById("estimatedDays");
    //parsed variables
    let day = parseInt(dayInput.value);
    let month = parseInt(monthInput.value);
    let year = parseInt(yearInput.value);

    //labels
    const labelDay = document.getElementById("label-day");
    const labelMonth = document.getElementById("label-month");
    const labelYear = document.getElementById("label-year");

    //error messages
    const errorDay = document.getElementById("error-day");
    const errorMonth = document.getElementById("error-month");
    const errorYear = document.getElementById("error-year");

    //actual date
    let actualDate = new Date();
    let actualYear = actualDate.getFullYear();
    let actualMonth = actualDate.getMonth() + 1;
    let actualDay = actualDate.getDate();

    //current age
    let age;
    let months;
    let days;

    //validators
    let validDay;
    let validMonth;
    let validYear;
    let validData;



    //day error catching
    if(isNaN(day)){
        labelDay.style.color = "hsl(0, 100%, 67%)";
        dayInput.style.color = "hsl(0, 100%, 67%)";
        dayInput.style.border = ".1rem solid hsl(0, 100%, 67%)";
        errorDay.textContent = "This field is required.";
        labelDay.style.color = "hsl(0, 100%, 67%)";
        validDay = false;
        

    }else if(day < 1 || day > 31){
        dayInput.style.color = "hsl(0, 100%, 67%)";
        dayInput.style.border = ".1rem solid hsl(0, 100%, 67%)";
        errorDay.textContent = "must be a valid day.";
        labelDay.style.color = "hsl(0, 100%, 67%)";
        validDay = false;
        
    }else{
        validDay = true;
        dayInput.style.color = "";
        dayInput.style.border = "";
        errorDay.textContent = "";
        labelDay.style.color = "";
    }

    //month error catching
    if(isNaN(month)){
        monthInput.style.color = "hsl(0, 100%, 67%)";
        monthInput.style.border = ".1rem solid hsl(0, 100%, 67%)";
        errorMonth.textContent = "This field is required.";
        labelMonth.style.color = "hsl(0, 100%, 67%)";
        validMonth = false;

    }else if (month < 1 || month > 12){
        monthInput.style.color = "hsl(0, 100%, 67%)";
        monthInput.style.border = ".1rem solid hsl(0, 100%, 67%)";
        errorMonth.textContent = "Must be a valid month.";
        labelMonth.style.color = "hsl(0, 100%, 67%)";
        validMonth = false;

    }else{
        validMonth = true;
        monthInput.style.color = "";
        monthInput.style.border = "";
        errorMonth.textContent = "";
        labelMonth.style.color = "";
    }

    //year error catching
    if (isNaN(year)) {
        yearInput.style.color = "hsl(0, 100%, 67%)";
        yearInput.style.border = ".1rem solid hsl(0, 100%, 67%)";
        errorYear.textContent = "This field is required.";
        labelYear.style.color = "hsl(0, 100%, 67%)";
        validYear = false;

    }else if(year < 1900){
        yearInput.style.color = "hsl(0, 100%, 67%)";
        yearInput.style.border = ".1rem solid hsl(0, 100%, 67%)";
        errorYear.textContent = "The year cannot be before 1900.";
        labelYear.style.color = "hsl(0, 100%, 67%)";
        validYear = false;

    }else if(year > new Date().getFullYear()){
        yearInput.style.color = "hsl(0, 100%, 67%)";
        yearInput.style.border = ".1rem solid hsl(0, 100%, 67%)";
        errorYear.textContent = "Must be in the past.";
        labelYear.style.color = "hsl(0, 100%, 67%)";
        validYear = false;

    }else{
        validYear = true;
        yearInput.style.color = "";
        yearInput.style.border = "";
        errorYear.textContent = "";
        labelYear.style.color = "";
    }

    if (!validDay || !validMonth || !validYear) {
        validData = false;
    }
    else{
        validData = true;
    }

    if (validData) {
        age = actualYear - year;
        months = actualMonth - month;
        days = actualDay - day;

        if(months < 0 || months === 0 && days < 0){
            age--;
            months = 12 - Math.abs(months);
        }
        if (days < 0){
            months--;
            days = 30 - Math.abs(days);
        }
        if( days < 0){
            months--;
            days = 30 - Math.abs(days);
        }
        // console.log(age);
        // console.log(months);
        // console.log(days);

        ageText.innerHTML = `${age}`;
        monthsText.innerHTML = `${months}`;
        daysText.innerHTML = `${days}`;
    }




}    

