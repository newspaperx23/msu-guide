import { useNavigate } from 'react-router-dom';

const Student = () => {
  const navigate = useNavigate();  // Hook สำหรับการนำทาง

  const goBackHome = () => {
    navigate('/');  // ใช้ navigate เพื่อไปที่หน้าแรก
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Student Page</h1>
      <p>This is the Student page. Click the button below to go back to the home page.</p>
      <button 
        onClick={goBackHome} 
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Student;
