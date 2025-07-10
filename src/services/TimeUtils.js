export function u_getMonth(date = new Date()) {
    const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthsOfYear[date.getMonth()];
}

export function u_getDay(date = new Date()){
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}



export function u_getScheduleDaysOption( closeDay = null, today = new Date() ) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const currentDayIndex = today.getDay();
    const daysOfWeekAdjusted = [...daysOfWeek.slice(currentDayIndex), ...daysOfWeek.slice(0, currentDayIndex)];

    return daysOfWeekAdjusted.map((day, index) => {
        const dayDate = new Date(today);
        dayDate.setDate(today.getDate() + index);

        let label = day.slice(0, 3);
        if (index === 0) label = "Today";
        else if (index === 1) label = "Tomorrow";

        return {
            label: label,
            label2: `${dayDate.getDate()} ${u_getMonth(dayDate)}`,
            value: `${dayDate.getFullYear()}-${u_getMonth(dayDate)}-${dayDate.getDate()}`,
            day: day,
            isEnabled: day !== closeDay,
            isActive: false,
        };
    });
}

export function u_getTimeOption({openingTime="12:00", closingTime="21:30", isToday=false}){
    const options = [];

    // Parse closing time
    const [startingHour, startingMinute] = openingTime.split(":").map(Number);
    const [closingHour, closingMinute] = closingTime.split(":").map(Number);

    // Create Date object for now and add 30 minutes
    const theDay = new Date();
    if(!isToday) {
        theDay.setHours(startingHour);
        theDay.setMinutes(startingMinute);
    }
    const startTime = new Date(theDay.getTime() + 30 * 60000);

    // Round to next 5-minute mark
    const minutes = startTime.getMinutes();
    const remainder = minutes % 5;
    if (remainder !== 0) {
        startTime.setMinutes(minutes + (5 - remainder));
    }

    while (true) {
        const hours = startTime.getHours();
        const mins = startTime.getMinutes();

        // Break if past closing time
        if (
            hours > closingHour ||
            (hours === closingHour && mins > closingMinute)
        ) break;

        // Format HH:mm (with leading 0s)
        const formatted = `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
        options.push(formatted);

        // Add 5 minutes
        startTime.setMinutes(startTime.getMinutes() + 5);
    }

    return options;
}