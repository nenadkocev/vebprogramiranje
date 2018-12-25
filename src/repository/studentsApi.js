export const getStudentsFromApi = () => {
    return fetch('http://localhost:8080/students');
};


export const postStudent = (student) => {
    // Default options are marked with *
    return fetch('http://localhost:8080/students', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(student), // body data type must match "Content-Type" header
    })// parses response to JSON
};

export const putStudent  = (student) => {
    console.log(student);
    return fetch('http://localhost:8080/students/update', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(student), // body data type must match "Content-Type" header
    })
};
