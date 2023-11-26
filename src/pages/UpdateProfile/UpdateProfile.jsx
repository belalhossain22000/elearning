import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetUserByEmailQuery, useUpdateUserByEmailMutation } from '../../redux/api/usersApi';
import Loading from '../../components/Loading/Loading';
import BtnLoading from '../../components/Loading/BtnLoading';

const UpdateProfile = () => {
  const userEmail = localStorage.getItem('email');
  const { data, isLoading } = useGetUserByEmailQuery(userEmail)
  const { firstName, lastName, language, country, whatsAppNumber, phoneNumber, email, referenceNumber, City, Division, FacebookLink, TrainerID, gender, dateOfBirth, courseFee } = data || {}
  const [updateUserByEmail, { isLoading: updateLoading }] = useUpdateUserByEmailMutation()

  const [formData, setFormData] = useState({
    firstName,
    lastName,
    language,
    country,
    whatsAppNumber,
    phoneNumber,
    email,
    referenceNumber,
    City,
    Division,
    FacebookLink,
    TrainerID,
    gender,
    dateOfBirth,
    courseFee,

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      profileImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = formData
      const mutationResult = await updateUserByEmail({ updatedData, email })
      console.log(!mutationResult.data.error)
      if (mutationResult) {

        alert("User Updated Successfully")

      }
    } catch (error) {
      alert("User not Updated")
    }

  };

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700 mb-1">
            Profile Image
          </label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            defaultValue={firstName}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            defaultValue={lastName}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="whatsAppNo" className="block text-sm font-medium text-gray-700 mb-1">
            Language
          </label>
          <input
            type="text"
            id="language"
            name="language"
            defaultValue={language}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="division" className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            defaultValue={country}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            whatsAppNumber
          </label>
          <input
            type="number"
            id="whatsAppNumber"
            name="whatsAppNumber"
            defaultValue={whatsAppNumber}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="facebookLink" className="block text-sm font-medium text-gray-700 mb-1">
            PhoneNumber
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            defaultValue={phoneNumber}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="trainerId" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            readOnly
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="trainerId" className="block text-sm font-medium text-gray-700 mb-1">
            Reference Number
          </label>
          <input
            type="text"
            id="referenceNumber"
            name="referenceNumber"
            defaultValue={referenceNumber}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="trainerId" className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            id="City"
            name="City"
            defaultValue={City}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="trainerId" className="block text-sm font-medium text-gray-700 mb-1">
            Division
          </label>
          <input
            type="text"
            id="Division"
            name="Division"
            defaultValue={Division}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="trainerId" className="block text-sm font-medium text-gray-700 mb-1">
            Facebook Link
          </label>
          <input
            type="text"
            id="FacebookLink"
            name="FacebookLink"
            defaultValue={FacebookLink}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="trainerId" className="block text-sm font-medium text-gray-700 mb-1">
            Trainer ID
          </label>
          <input
            type="text"
            id="TrainerID"
            name="TrainerID"
            value={TrainerID}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="trainerId" className="block text-sm font-medium text-gray-700 mb-1">
            Date Of Birth
          </label>
          <input
            type="text"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="trainerId" className="block text-sm font-medium text-gray-700 mb-1">
            gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            defaultValue={gender}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="trainerId" className="block text-sm font-medium text-gray-700 mb-1">
            Course Fee
          </label>
          <input
            defaultValue={courseFee}
            type="text"
            id="courseFee"
            name="courseFee"
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Other fields */}
        <button
          type="submit"
          className="btn btn-primary w-[100%]"
        >
          {updateLoading ? <BtnLoading /> : "Update"}

        </button>
      </form>
      <Link className='btn btn-primary mt-5 w-full' to="/profile">Back To Profile</Link>
    </div >
  );
};

export default UpdateProfile;
