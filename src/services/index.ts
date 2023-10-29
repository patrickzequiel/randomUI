import axios from "axios"

export const fetchTasks = () => {
    return axios({
        method: 'get',
        url: 'https://task-manager-bw3f.onrender.com/tasks'
    })
    .then(response => response.data)
    .catch(error => {
        console.error(error);
        throw error; // Rethrow the error if needed
    });
}