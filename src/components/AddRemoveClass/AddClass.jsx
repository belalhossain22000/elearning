import { useState } from "react";
import { useGetUserByEmailQuery } from "../../redux/api/usersApi";

const AddClass = () => {
    const email = localStorage.getItem('email')
    const { data: user } = useGetUserByEmailQuery(email)

    const [classOne, setClassOne] = useState("");
    const [classTwo, setClassTwo] = useState("");

    const handleClassOneChange = (e) => {
        setClassOne(e.target.value);
    };

    const handleClassTwoChange = (e) => {
        setClassTwo(e.target.value);
    };

    const addClassLinkOne = async () => {
        try {
            // Assuming you're using an API to add class link 1
            const response = await fetch('/add-class-link-1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ classLink: classOne }),
            });

            if (response.ok) {
                console.log("Class Link 1 added successfully");
            } else {
                console.error("Failed to add Class Link 1");
            }
        } catch (error) {
            console.error("Error while adding Class Link 1:", error);
        }
    };

    const addClassLinkTwo = async () => {
        try {
            // Assuming you're using an API to add class link 2
            const response = await fetch('/add-class-link-2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ classLink: classTwo }),
            });

            if (response.ok) {
                console.log("Class Link 2 added successfully");
            } else {
                console.error("Failed to add Class Link 2");
            }
        } catch (error) {
            console.error("Error while adding Class Link 2:", error);
        }
    };

    return (
        <>
            {(user?.role === "Manager" || user?.role === "Admin") && (
                <div className="flex flex-col justify-center md:flex-row gap-10 my-10">
                    <div className="flex flex-col md:flex-row gap-5">
                        <input
                            onChange={handleClassOneChange}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                        />
                        <button onClick={addClassLinkOne} className="btn btn-primary">
                            Add Class Link-1
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <input
                            onChange={handleClassTwoChange}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                        />
                        <button onClick={addClassLinkTwo} className="btn btn-primary">
                            Add Class Link-2
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddClass;
