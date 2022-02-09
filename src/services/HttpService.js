export default class HttpService {
  // url = "http://localhost:8000/api";
  url = process.env.REACT_APP_API_BASEURL

  postData = async (body, added_url, tokenId = "") => {
    const token = await localStorage.getItem(tokenId);
    const requestOptions = this.postRequestOptions(token, body);
    return fetch(this.url + "/" + added_url, requestOptions).then((response) => response.json());
  };

  getData = async (added_url, tokenId = "") => {
    const token = await localStorage.getItem(tokenId);
    const requestOptions = this.getRequestOptions(token);
    return fetch(this.url + "/" + added_url, requestOptions).then((response) => response.json());
  };

  deleteData = async (added_url, tokenId = "") => {
    const token = await localStorage.getItem(tokenId);
    const requestOptions = this.deleteRequestOptions(token);
    return fetch(this.url + "/" + added_url, requestOptions).then((response) => response.json());
  };

  getRequestOptions = (token) => {
    let requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    };
    return requestOptions;
  };

  postRequestOptions = (token, item) => {
    let requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    };
    return requestOptions;
  };

  deleteRequestOptions = (token) => {
    let requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    };
    return requestOptions;
  };
}
