export const getStudyProgramsFromApi = () => {
    return fetch('http://localhost:8080/study_programs');
};

export const addNewStudyProgramApi = (studyProgram) => {
    return  fetch('http://localhost:8080/study_programs', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(studyProgram), // body data type must match "Content-Type" header
    })
        .catch(error => console.error('Error:', error));
};

export const deleteStudyProgramApi = (id, isDeleteOk) => {

    return  fetch('http://localhost:8080/study_programs/delete/' + id, {
        method: "DELETE" // *GET, POST, PUT, DELETE, etc.
        //mode: "cors", // no-cors, cors, *same-origin
    })
        .then(response => isDeleteOk(response)); // parses response to JSON
};