

import Link from "next/link";


const Register = () => {
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <div className="flex flex-col space-y-4">
        
        <input
          type="text"
          placeholder="username"
          
          className="px-4 py-2 border rounded-md w-72"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          
          className="px-4 py-2 border rounded-md w-72"
        />
        <input
          type="password"
          placeholder="password"
          
          className="px-4 py-2 border rounded-md w-72"
        />
        <p className="flex gap-2 ">
          
        
          Registered before
          / 
          <Link href="/login">
            
            <span className=" cursor-pointer text-red-500 font-semibold">Login</span>
           
          </Link>
        </p>
        <button
         
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 duration-200"
        >
         Register
        </button>
      </div>
    </div>
  );
};

export default Register;
