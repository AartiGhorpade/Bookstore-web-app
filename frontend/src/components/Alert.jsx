const Alert = ({ type = "info", message, onClose }) => {
  const styles = {
    success: "bg-green-100 text-green-800 border-green-400",
    error: "bg-red-100 text-red-800 border-red-400",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-400",
    info: "bg-blue-100 text-blue-800 border-blue-400",
  };

  return (
    <div
      className={`flex items-center justify-between border-l-4 p-4 rounded-lg shadow-md mb-4 ${styles[type]}`}
    >
      <p className="text-sm font-medium">{message}</p>
      <button onClick={onClose} className="ml-4 font-bold text-lg leading-none">
        ×
      </button>
    </div>
  );
};

export default Alert;
