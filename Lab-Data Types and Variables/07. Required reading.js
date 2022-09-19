function requiredReading(bookPages, pagesPerHour, daysToRead) {
    let totalTime = bookPages / pagesPerHour;
    let dayTime = totalTime / daysToRead;
    console.log(dayTime);
}
requiredReading(212,20,2)