import React from 'react';

function Contact() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-lg">
          <form>
           <h1 className='font-bold text-xl ml-10'>Contact Us!</h1>
            <div className="mb-4 pt-2">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
            <textarea className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none" placeholder="Type your message"></textarea>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
