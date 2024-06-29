export default function Button({ styles }) {
  return (
    <button
      className={`bg-blue-gradient font-poppins font-medium py-4 px-6  rounded-md text-[18px]  text-primary outline-none cursor-pointer ${styles}`}
    >
      Get Started
    </button>
  );
}
