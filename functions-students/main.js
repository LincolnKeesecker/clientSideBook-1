const createStudent = () => {
    const newStudent = {
        name: "Lincoln",
        grade: "8"
    }

    return newStudent
} 

const addMathGrade = (student) => {
    const mathGrade = student.math = "B"

    return student
}

const addHistoryGrade = (student) => {
    const historyGrade = student.history = "C"

    return student
}

const addScienceGrade = (student) => {
    const scienceGrade = student.science = "A"

    return student
}

let student = createStudent()
addMathGrade(student)
addHistoryGrade(student)
addScienceGrade(student)
console.log(student)