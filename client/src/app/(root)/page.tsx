"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [editData, setEditData] = useState({
    title: "",
    description: "",
  });
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleEditChange = (e: any) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_FRONTEND_URI}/api/v1/todo`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setData({ title: "", description: "" });
      fetchData();
      toast.success("Todo added successfully");
      console.log(res);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_FRONTEND_URI}/api/v1/todo`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setTodos(res.data.data || []);

      // console.log(res.data.data);
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };
  const UpdateTodo = async (id: any) => {
    try {
       const res = await axios.put(
        `${process.env.NEXT_PUBLIC_FRONTEND_URI}/api/v1/todo/${id}`,
        editData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // console.log(res);
      setEditData({
        title: "",
        description: "",
      });
      toast.success(res.data.message);
      fetchData();
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  const deleteTodo = async (id: any) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_FRONTEND_URI}/api/v1/todo/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setTodos(todos.filter((todo) => todo._id !== id));
      toast.success(res.data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Todo Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mt-3 bg-white rounded-lg shadow-lg p-6 space-y-4"
      >
        <h1 className="text-2xl font-bold text-gray-700">Add a Todo</h1>
        <Input
          value={data?.title}
          name="title"
          placeholder="Enter title"
          className="w-full"
          onChange={handleChange}
        />
        <Input
          value={data?.description}
          name="description"
          placeholder="Enter description"
          className="w-full"
          onChange={handleChange}
        />
        <Button type="submit" className="w-full">
          Add Todo
        </Button>
      </form>

      {/* Todos List */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg mt-8 p-6 space-y-4">
        <h2 className="text-xl font-bold text-gray-700">Your Todos</h2>
        <div className="space-y-2">
          {/* Example todos */}
          {todos?.map((_, index) => (
            <div
              key={_._id || index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-md shadow-sm"
            >
              <div>
                <p className="text-lg font-medium text-gray-800">{_.title}</p>
                <p className="text-sm text-gray-600">{_.description}</p>
              </div>
              <div className="flex space-x-2">
                <Dialog>
                  <DialogTrigger className="bg-green-500 text-white px-1.5 py-1.5 rounded-md text-sm">
                    Update
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Update data</DialogTitle>
                      <DialogDescription className="mt-4 space-y-3">
                        <Input
                          value={editData?.title}
                          name="title"
                          placeholder="Enter title"
                          className="w-full"
                          onChange={handleEditChange}
                        />
                        <Input
                          value={editData?.description}
                          name="description"
                          placeholder="Enter description"
                          className="w-full"
                          onChange={handleEditChange}
                        />
                      </DialogDescription>
                      <DialogFooter>
                        <DialogClose
                          aria-label="Close"
                          onClick={() => {
                            UpdateTodo(_._id);
                          }}
                          className="bg-green-500 mt-2 w-fit text-white px-1.5 py-1.5 rounded-md text-sm"
                        >
                          Updata data
                        </DialogClose>
                      </DialogFooter>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <Button
                  onClick={() => deleteTodo(_._id)}
                  className="bg-red-500 text-white"
                  size="sm"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
