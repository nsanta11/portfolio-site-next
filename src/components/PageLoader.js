// components/PageLoader.js
// "use client";

// import { useEffect, useState } from "react";

// export default function PageLoader() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     console.log("PageLoader mounted");
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 40); // keep loader visible long enough to see it
//     return () => clearTimeout(timer);
//   }, []);

//   if (!loading) return null;

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         zIndex: 9999,
//         backgroundColor: "red",
//         color: "white",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         fontSize: "24px",
//       }}
//     >
//       <div
//         style={{
//           width: "60px",
//           height: "60px",
//           border: "6px solid white",
//           borderTopColor: "transparent",
//           borderRadius: "50%",
//           animation: "spin 0.8s linear infinite",
//           marginBottom: "20px",
//         }}
//       />
//       <p>Loading... (TEST)</p>
//     </div>
//   );
// }
