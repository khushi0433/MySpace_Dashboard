import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ProfileCard({ user }) {
  const [editing, setEditing] = useState(false);
  const [bio, setBio] = useState(user.bio);

  const handleToggle = () => {
    setEditing((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-6xl mx-auto border">
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
        <div className="relative">
          <button className="text-gray-500 hover:text-blue-600 transition-colors">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-5">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                {user.name.charAt(0)}
              </div>
              <div className="absolute bottom-0 right-0 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white cursor-pointer">
                <i className="fas fa-pen text-xs text-white"></i>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
              <p className="text-gray-600">{user.title}</p>
            </div>
          </div>
          <div className="flex justify-around mb-8 p-1 bg-gray-50 rounded-lg">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">24</p>
              <p className="text-sm text-gray-600 p-2">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">2.4k</p>
              <p className="text-sm text-gray-600 p-2">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 ">850</p>
              <p className="text-sm text-gray-600 p-2">Following</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4 text-xl text-gray-500 mb-8">
            {user.github && (
              <a
                href={user.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white transition-colors"
              >
                  <FaGithub />
              </a>
            )}
            {user.linkedin && (
              <a
                href={user.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>
            )}
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="mb-7">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h4>
            <div className="space-y-3">
              <div className="flex">
                <div className="w-1/3 text-gray-600">Email:</div>
                <div className="w-2/3 text-gray-900">{user.email || "khushbu@example.com"}</div>
              </div>
              <div className="flex">
                <div className="w-1/3 text-gray-600">Phone:</div>
                <div className="w-2/3 text-gray-900">{user.phone || "+92 (123) 567-8901"}</div>
              </div>
              <div className="flex">
                <div className="w-1/3 text-gray-600">Location:</div>
                <div className="w-2/3 text-gray-900">{user.location || "Hyderabaad, Pakistan"}</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">About Me</h4>
            {editing ? (
              <div>
                <textarea
                  className="w-full border border-black text-black rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={bio}
                  rows="4"
                  onChange={(e) => setBio(e.target.value)}
                />
                <div className="flex space-x-3">
                  <button
                    className="bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                    onClick={handleToggle}
                  >
                    <i className="fas fa-check mr-2"></i> Save Changes
                  </button>
                  <button
                    className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={handleToggle}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-gray-700 mb-5">{bio}</p>
                <button
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  onClick={handleToggle}
                >
                  <i className="fas fa-pen mr-2"></i> Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}