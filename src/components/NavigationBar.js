// import React from "react";
// import {useHistory} from "react-router-dom";
// import {BsArrowRight} from "react-icons/bs"
//
// function NavigationBar({image, title, navigationdirection, target}) {
//     const history = useHistory();
//     function handleClick() {
//         history.push(target);
//     }
//
//     return (
//             <article className="navigation-bar">
//                 <button
//                     type="button"
//                     onClick={handleClick}
//                 >
//                     <img src={image} alt={title} />
//                     <p className="navigation-direction">
//                         {navigationdirection}
//                     </p>
//                     <div className="arrow-holder">
//                         <BsArrowRight/>
//                     </div>
//                 </button>
//             </article>
//     );
// }
//
// export default NavigationBar;