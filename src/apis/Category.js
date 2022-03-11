import axios from "axios";

const Category = {
    list: (page = 1) => {
        return axios.get('http://localhost:8000/api/categories?page=' + page);
    },
    add: (title) => {
        return axios.post('http://localhost:8000/api/categories', { title }, { headers: { Authorization: 'Bearer ' + localStorage.getItem("user-token") } });
    },
    showOne: (id) => {
        return axios.get('http://localhost:8000/api/categories/' + id, null, );
    },
    edit: (title, id) => {
        return axios.put('http://localhost:8000/api/categories/' + id, { title }, { headers: { Authorization: 'Bearer ' + localStorage.getItem("user-token") } });
    },
    remove: (id) => {
        return axios.delete('http://localhost:8000/api/categories/' + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem("user.api_token") } });
    },
    listAll: () => {          // used to populate dropdowns
        return axios.get('http://localhost:8000/api/categories?all=1');
    }
};

export default Category;