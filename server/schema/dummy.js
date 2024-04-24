
const usersData  =[
    {id: "1", name: "Bond", age: 36, profession: "Programmer"},
    {id: "13", name: "Anna", age: 26, profession: "Baker"},
    {id: "211", name: "Bella", age: 16, profession: "Mechanic"},
    {id: "19", name: "Gina", age: 26, profession: "Painter"},
    {id: "150", name: "Georgia", age: 36, profession: "Teacher"},
]

const hobbyData  =[
    {id: "1", title: "Programming", description: "Using computers to make world better place", userId: "1"},
    {id: "2", title: "Rowing", age: 26, description: "Sweat and feel better before eating donuts", userId: "1"},
    {id: "3", title: "Swimming", age: 16, description: "Get in the water and learn to become the water", userId: "19"},
    {id: "4", title: "Fencing", age: 26, description: "A hobby for fency people", userId: "211"},
    {id: "5", title: "Hiking", age: 36, description: "Wear hiking boots and explore the world", userId: "1"},
]

const postData  =[
    {id: "1", comment: "This is comment 1 and inserted by user", userId: "1"},
    {id: "2", comment: "This is comment 2 and inserted by user", userId: "1"},
    {id: "3", comment: "This is comment 3 and inserted by user", userId: "19"},
    {id: "4", comment: "This is comment 4 and inserted by user", userId: "211"},
    {id: "5", comment: "This is comment 5 and inserted by user", userId: "1"},
]


// module.exports = {
//     usersData,
//     hobbyData,
//     postData
// }

exports.usersData = usersData;
exports.hobbyData = hobbyData;
exports.postData = postData;