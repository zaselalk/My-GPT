const UserMesssage = ({ message }) => {
  return (
    <div className="flex justify-end mb-4 ">
      <div className="flex flex-row-reverse items-center">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 m-3 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
            alt="User Avatar"
          />
        </div>
        <div className="flex flex-col justify-center max-w-sm px-8 py-4 bg-blue-600 rounded-xl">
          <p className="font-sans text-base text-white">{message.content}</p>
        </div>
      </div>
    </div>
  );
};

export default UserMesssage;
