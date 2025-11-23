import axios from "axios"

const url = "http://127.0.0.1:8000/api";
// const storageBaseURL = "http://127.0.0.1:8000/storage/books";

export const API = axios.create({
      baseURL: url
});

// export const bookImageStorage = storageBaseURL;

export default API