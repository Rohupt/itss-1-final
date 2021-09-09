/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
const useDelete = () => {
    const defaultStudents = ["Huyen", "Hoa", "Hung", "Long"];
    const [students, setStudents] = useState(defaultStudents);

    const deleteStudent = (name) => {
        if (students.includes(name)) {
            students.splice(students.indexOf(name), 1);
        }
    };
    return [defaultStudents, students, deleteStudent];
};

export default useDelete;
