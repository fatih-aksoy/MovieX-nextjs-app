
import React from "react";
import CardContainer from "./components/CardContainer";

export const metadata = {
  title: "Profile",
};

const Profile = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex flex-col">
        <h1>Who&#39;s watching?</h1>
        <CardContainer />
      </div>
    </div>
  );
};

export default Profile;

// import React from "react";
// import CardContainer from "./components/CardContainer";

// export const metadata = {
//   title: "Profile",
// };
// const Profile = () => {
//   return (
//     <div className="flex items-center justify-center mt-20">
//       <div className="flex flex-col">
//         <h1>Who&#39;s watching?</h1>
//         <CardContainer />
//       </div>
//     </div>
//   );
// };

// export default Profile;
