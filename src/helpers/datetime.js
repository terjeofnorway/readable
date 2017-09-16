class DateTimeHelper{

    static timestampToHumanDate (timestamp){
        const date = new Date(timestamp);
        return date.toDateString();
    }
}


export default DateTimeHelper;