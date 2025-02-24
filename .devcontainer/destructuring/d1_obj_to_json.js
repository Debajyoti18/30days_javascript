const course = {
    coursename: "30_days_js",
    price: 434,
    instructor: "Hitesh Choudhary"
}

// Object destructuring is a convenient way to extract properties from objects. Instead of writing:

//  instructor = course.instructor
// You can use destructuring syntax:
// {instructor} = course

// You can also rename variables while destructuring using this syntax:

 {instructor: in} = course  // The property 'instructor' is assigned to variable 'in'

// Regarding JSON (JavaScript Object Notation):


// JSON requires property names to be in double quotes
// Your commented example can be written properly as:

{
    "name": "dev",
    "email": "devahjk@njan.com"
}
Here are some additional examples of object destructuring that might be helpful:
// Multiple properties at once
const {coursename, price} = course

// Destructuring with default values
const {duration = "3 months"} = course  // duration will be "3 months" if not found in course

// Nested destructuring
const nested = {
    course: {
        name: "JavaScript",
        details: {
            level: "Beginner"
        }
    }
}
const {course: {details: {level}}} = nested
[
    {},
    {},
    {}
]
