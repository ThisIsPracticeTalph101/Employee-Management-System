import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export function listEmployees() {
    return axios.get(REST_API_BASE_URL);
}

export function createEmployee (employee) {
    axios.post(REST_API_BASE_URL, employee);
}