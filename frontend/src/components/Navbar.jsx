export default function Navbar({ title, icon, variant, fullWidth }) {
  const commonClasses =
    "w-full h-16 sm:h-20 text-white flex justify-center items-center rounded-lg z-10";
  const loginRegisterClasses = "bg-purple-600"; // Adjust background color for login/register
  const patientDetailsClasses = fullWidth
    ? "bg-slate-100 absolute top-0 left-0 right-0 h-16 sm:h-20" // Full width for PatientDetails
    : "bg-slate-100 absolute top-[-140px] sm:top-[-167px] right-0 sm:right-[-7px]"; // Adjust positioning for PatientDetails

  const navbarClasses =
    variant === "patientDetails"
      ? `${commonClasses} ${patientDetailsClasses}`
      : `${commonClasses} ${loginRegisterClasses}`;

  return (
    <nav className={navbarClasses}>
      <span className="text-3xl sm:text-4xl lg:text-5xl m-8 sm:m-12">
        {icon}
      </span>
      <span className="text-2xl sm:text-3xl lg:text-4xl">{title}</span>
    </nav>
  );
}
