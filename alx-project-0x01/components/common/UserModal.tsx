
import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
      address : {street : "", suite : "",  zipcode : 0, city : "", geo : {lat : "", lng : ""} },
      company: {name : "", catchPhrase : "", bs : ""},
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser((prevuser) => ({ ...prevuser, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userId" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              id="title"
              name="title"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              id="body"
              name="body"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              id="body"
              name="body"
              value={user.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Website</label>
            <input
              id="body"
              name="body"
              value={user.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter website"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Address</label>
            <div className="grid grid-cols-2 gap-1">
                <input
                id="body"
                name="body"
                value={user.address.street}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter street"
                />
                <input
                id="body"
                name="body"
                value={user.address.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter city"
                />
                <input
                id="body"
                name="body"
                value={user.address.suite}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter suite"
                />
                <input
                id="body"
                name="body"
                value={user.address.zipcode}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter zipcode"
                />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Company</label>
            <div className="grid grid-cols-2 gap-1">
                <input
                id="body"
                name="body"
                value={user.company.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"
                />
                <input
                id="body"
                name="body"
                value={user.company.catchPhrase}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter catch Phrase"
                />
                <input
                id="body"
                name="body"
                value={user.company.bs}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter bs"
                />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;