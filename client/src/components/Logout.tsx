"use client";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_FRONTEND_URI}/api/v1/user/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      router.push("/auth/log-in");
      toast.success(res.data.message);
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };
  return (
    <Button onClick={handleLogout} variant={"destructive"}>
      Log out
    </Button>
  );
};

export default Logout;
