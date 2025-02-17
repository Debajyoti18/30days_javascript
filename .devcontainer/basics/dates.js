// Creating dates
let now = new Date(); // Current date and time
let specificDate = new Date('2024-01-31'); // Specific date
console.log(specificDate.toDateString());//Wed Jan 31 2024
let customDate = new Date(2024, 0, 31, 12, 30, 0); // Year, month, day, hours, minutes, seconds

// Date methods
console.log(now.getFullYear()); // 2024
console.log(now.getMonth()); // 0-11 (January is 0)
console.log(now.getDate()); // Day of month (1-31)
console.log(now.getDay()); // Day of week (0-6)
console.log(now.getHours()); // 0-23
console.log(now.getMinutes()); // 0-59

// Formatting dates
console.log(now.toLocaleDateString()); // Locale-specific date
console.log(now.toISOString()); // ISO 8601 format
console.log(now.toUTCString()); // UTC standard format

// Timestamp operations
let timestamp = now.getTime(); // Milliseconds since Jan 1, 1970
let futureDate = new Date(timestamp + 86400000); // Add 24 hours

// Date calculations
let diff = new Date(2025, 0, 1) - now; // Difference in milliseconds

//converting date to seconds
console.log(Math.floor(Date.now));//1543453745

// More detailed format
let date = new Date('2024-01-31');
console.log(date.toLocaleString('default', {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric"
})); // "Wed, January 31, 2024"

//for consise more
let date1 = new Date('2024-01-31');
console.log(date1.toLocaleString('default', {
    weekday: "long",
    day: "numeric"
})); // Outputs: "Wednesday 31"
// let date1 = new Date('2024-01-31')

// This creates a new Date object for January 31, 2024
// The new Date() constructor accepts dates in 'YYYY-MM-DD' format


// date1.toLocaleString('default', {...})

// toLocaleString() formats the date according to locale conventions
// 'default' uses the system's default locale
// The second parameter is an options object that specifies the format


// The options object has two properties:

// weekday: "long" - Shows the full name of the day (e.g., "Wednesday")
// day: "numeric" - Shows the day of the month as a number (31)



// So this code will output something like:
// CopyWednesday, 31
// This is useful when you want to display just specific parts of a date (in this case, the weekday and day) in a human-readable format
// . You can customize the output further by adding or removing options like month, year, hour, etc.
