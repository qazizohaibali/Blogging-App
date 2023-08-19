// import { signOut } from "next-auth/react";
// import Link from "next/link";

// export default function Header() {

//     return (
//       <header>
//         <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
//           <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//             <div className="flex items-center lg:order-2">
//             <Link
//               href="/auth/login"
//               className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none "
//             >
//               Log in
//             </Link>
//               <button
//                 onClick={signOut}
//                 className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none "
//               >
//                 Log out
//               </button>
//               <Link
//                 href="/profile"
//                 className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none "
//               >
//                 Profile
//               </Link>
//             </div>
//           </div>
//         </nav>
//       </header>
//     );
// };
// export async function getServerSideProps ({req}) {
//     const session = await getSession({req});
//     if(!session) {
//         return (
//             <header>
//               <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                   <div className="flex items-center lg:order-2">
//                   <Link
//                     href="/auth/login"
//                     className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none "
//                   >
//                     Log in
//                   </Link>
//                     <button
//                       onClick={signOut}
//                       className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none "
//                     >
//                       Log out
//                     </button>
//                     <Link
//                       href="/profile"
//                       className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none "
//                     >
//                       Profile
//                     </Link>
//                   </div>
//                 </div>
//               </nav>
//             </header>
//           );
//     }
//     return (
//         <header>
//           <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
//             <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//               <div className="flex items-center lg:order-2">
//               <Link
//                 href="/auth/login"
//                 className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none "
//               >
//                 Log in
//               </Link>
//                 <button
//                   onClick={signOut}
//                   className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none "
//                 >
//                   Log out
//                 </button>
//                 <Link
//                   href="/profile"
//                   className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none "
//                 >
//                   Profile
//                 </Link>
//               </div>
//             </div>
//           </nav>
//         </header>
//       );

//     return {
//       props: {
//           session
//         }
//     }
// }
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className = "bg-[#7749F8]">
      {/* <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"> */}
      {/* <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"> */}

      <div className=" flex items-center justify-between h-16 max-w-[1200px] mx-auto">
        <div className="text-[30px] text-white font-bold uppercase">
          Personal Blogging App
        </div>
      
      <div className="flex items-center lg:order-2">
        <Link
          href="/"
          className="text-gray-800 dark:text-white  hover:bg-gray-50 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-white hover:text-gray-800 focus:outline-none "
        >
          Home
        </Link>

        {!session ? (
          <Link
            href="/auth/login"
            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-white hover:text-gray-800 focus:outline-none "
          >
            Log in
          </Link>
        ) : (
          <>
            <button
              onClick={signOut}
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-white hover:text-gray-800 focus:outline-none "
            >
              Log out
            </button>
            <Link
              href="/profile"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-white hover:text-gray-800 focus:outline-none "
            >
             Profile
            </Link>
          </>
        )}
      </div>
      </div>
      {/* </div> */}
      {/* </nav> */}
    </header>
  );
}
