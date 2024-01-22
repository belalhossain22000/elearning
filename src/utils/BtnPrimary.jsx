const BtnPrimary = ({children}) => {
  return (
    <button className={`bg-green-600 text-white px-5 py-4 font-medium text-2xl rounded-md hover:bg-green-800 transition duration-300`}>
     {children}
    </button>
  );
};

export default BtnPrimary;
