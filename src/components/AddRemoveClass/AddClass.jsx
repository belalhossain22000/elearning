import { useState } from "react";
import { useGetUserByEmailQuery } from "../../redux/api/usersApi";
import { useGetClassLinkQuery, useUpdateSingleClassMutation } from "../../redux/api/classApi";

const AddClass = () => {
    const email = localStorage.getItem('email')
    const { data: user } = useGetUserByEmailQuery(email)
    const { data: classes } = useGetClassLinkQuery()
    const [classLink, setClassLink] = useState("");

    const [updateSingleClass, { isLoading }] = useUpdateSingleClassMutation()

    // class one link add function
    const handleClassLinkAddOne = async (id) => {
        const updatedData = { classLink, id }
        console.log(updatedData)
        await updateSingleClass(updatedData)
    }



    return (
        <>
            {(user?.role === "Manager" || user?.role === "Admin") && (
                <div className="flex flex-col justify-center md:flex-row gap-10 h-[70vh] md:h-[100vh] p-5">
                    {classes?.classesLinks?.map((classItem) => (
                        <div key={classItem?.id} className="flex flex-col md:flex-row gap-5">
                            <input
                                onChange={(e) => setClassLink(e.target.value)}
                                defaultValue={classItem?.classLink}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                            />
                            <button
                                className="btn btn-primary"
                                onClick={() => handleClassLinkAddOne(classItem._id)}
                            >
                                {isLoading ? "Adding Class Link" : "Add Class Link-1"}
                            </button>

                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default AddClass;
