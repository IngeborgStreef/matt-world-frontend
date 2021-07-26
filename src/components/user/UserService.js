// import axios from "axios";
//
// export default class UserService {
//
//     userApi = "http://localhost:8080/api/users"
//     _authHeader;
//
//     set authHeader(header) {
//         this._authHeader = header;
//     }
//
//     async createUser(user) {
//         await axios.post(this.userApi, user)
//     }
//
//     async updateUser(user) {
//         await axios.put(`${this.userApi}/${user.id}`, user, {
//             headers: {
//                 'Authorization': `Bearer ${this.authHeader}`
//             }
//         })
//     }
//
//     async readUser(id) {
//         await axios.get(`${this.userApi}/${id}`, {
//             headers: {
//                 'Authorization': `Bearer ${this.authHeader}`
//             }
//         }).then(response => response.data);
//     }
//
//     async createChild(child) {
//         await axios.post(this.userApi, child, {
//             headers: {
//                 'Authorization': `Bearer ${this.authHeader}`
//             }
//         })
//     }
//
//     async updateChild(child) {
//         await axios.put(`${this.userApi}/${child.id}`, child, {
//             headers: {
//                 'Authorization': `Bearer ${this.authHeader}`
//             }
//         })
//     }
//
//     async readChild(id) {
//         await axios.get(`${this.userApi}/${id}`).then(response => response.data);
//     }
//
//     async uploadUserAvatar(userId, file) {
//         let formData = new FormData(); // instantiate it
//         // suppose you have your file ready
//         formData.set('file', file);
//         // add some data you collected from the input fields
//         await axios.post(`${this.userApi}/${userId}/avatar`, formData, {
//             headers: {
//                 'Authorization': `Bearer ${this.authHeader}`,
//                 'content-type': 'multipart/form-data' // do not forget this
//             }
//         })
//     }
//
//     async uploadChildAvatar(userId, childId, file) {
//         let formData = new FormData(); // instantiate it
//         // suppose you have your file ready
//         formData.set('file', file);
//         // add some data you collected from the input fields
//         await axios.post(`${this.userApi}/${userId}/children/${childId}/avatar`, formData, {
//             headers: {
//                 'Authorization': `Bearer ${this.authHeader}`,
//                 'content-type': 'multipart/form-data' // do not forget this
//             }
//         })
//     }
// }