// import React from "react";
// import {useHistory} from "react-router-dom";
// import matt from "../assets/matt.png"
// import UserForm from "../components/user/UserForm";
// import UserService from "../components/user/UserService";
//
// function CreateUserPage() {
//
//     const history = useHistory();
//     const userService = new UserService();
//
//     async function onComplete(user) {
//         await userService.createUser(user)
//         history.push("/main");
//     }
//
//     return (
//         <>
//
//             <main className="mainpagecontainerForm">
//                 <aside className="matt">
//                     <img src={matt} alt="Matt"/>
//                 </aside>
//                 <UserForm completed={onComplete} title="Nieuwe gebruiker"/>
//             </main>
//
//             <footer className="arrow">
//                 <button>
//
//                 </button>
//             </footer>
//         </>
//     )
// }
//
// export default CreateUserPage;
//
//
// // const {handleSubmit, formState: {errors}, register} = useForm();
// //     const [parentName, setParentName] = useState("");
// //     const [email, setEmail] = useState("");
// //     const [nameKid, setNameKid] = useState("");
// //     const [ageKid, setAgeKid] = useState(0);
// //     const [password, setPassword] = useState("");
// //
// //     async function onFormSubmit(data) {
// //         console.log(data)
// //         try {
// //             const result = await axios.post('http://localhost:8080/api/users', {
// //                 name: data.parentName,
// //                 email: data.emailRegistration,
// //                 password: data.password
// //             })
// //         }
// //         catch (e) {
// //             console.log("Error is: ", e)
// //         }
// //     }
// //
// //     const validatePassword = (value)=> {
// //         if (password !== value) return false;
// //     }
// //
// //     const history = useHistory();
// //     function handleClick() {
// //         history.push("/main");
// //     }
// //
// //     return (
//
// //     );