/*
    Define a variable named `notes` and assign a value of an empty array
*/


/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

const notes = [
    {
        id: 1,
        text: "Double check previous projects for hints before asking for help",
        author: "Lincoln Keesecker",
        date: "2-14-2023",
        topics: ["learning"],
    },
    {
        id: 2,
        text: "Peer review is always helpful to see it from a new perspective",
        author: "Lincoln Keesecker",
        date: "2-14-2023",
        topics: ["help"],
    },
]

notes.push(
    {
        id: 3,
        text: "When in doubt W3schools it out",
        author: "Lincoln Keesecker",
        date: "2-14-2023",
        topics: ["research"],
    }
)

notes.push(
    {
        id: 4,
        text: "Taking a break and walking away is just as important as powering through",
        author: "Lincoln Keesecker",
        date: "2-14-2023",
        topics: ["self-care"],
    }
)
notes.push(
    {
        id: 5,
        text: "Slow down to speed up",
        author: "Lincoln Keesecker",
        date: "2-14-2023",
        topics: ["Patience"],
    }
)
// ---------------------------------------------------

// console.log("*** All Note Topics ***")

// for (const note of notes) {
//     for (const topic of note.topics) {
//         console.log(note.topics)
//     }
// }

// ---------------------------------------------------

// let totalTopics = 0
// let totalNotes = 0

// for (const note of notes) {
//         totalNotes += 1;
//     for (const topic of note.topics){
//         totalTopics += 1;
//     }
// }


// console.log("*** Average Topics Per Note ***")
// console.log(totalTopics / totalNotes)

// ---------------------------------------------------

// let filteredNotes = []
// let criteria = "help"

// for (const note of notes) {
//     for (const topic of note.topics) {
//         if (topic.includes(criteria)) {
//             filteredNotes.push(note)
//         }

//     }
// }
// console.log(filteredNotes)

// ---------------------------------------------------

console.log("***  Note Articles  ***")

for (const note of notes) {
    let text = note.text
    for (const topic of note.topics) {
        let topic = note.topic
        console.log(`<article>${text}\n\t<section>${topic}</section>\n</article>`)
    }
}
