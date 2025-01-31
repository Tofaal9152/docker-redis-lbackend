// "use client";
import { cookies } from "next/headers";
import { Button } from "./ui/button";
import Logout from "./Logout";
import Link from "next/link";

const Navbar = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const isLoggedin = token?.value ? true : false;
  console.log(isLoggedin);

  return (
    <div className=" bg-slate-100 shadow-md sticky top-0 p-2">
      <div className="container flex items-center justify-between mx-auto ">
        <div className="text-3xl font-bold italic">TodoApp</div>
        <div className="gap-2 flex items-center">
          {!isLoggedin ? (
            <>
              <Link href={"/auth/log-in"}>
                <Button>login</Button>
              </Link>
              <Link href={"/auth/sign-up"}>
                <Button>signup</Button>
              </Link>
            </>
          ) : (
            <Logout />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
