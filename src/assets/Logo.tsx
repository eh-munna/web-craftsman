export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100%"
      height="32px"
    >
      <circle cx="50" cy="50" r="40" fill="#4CAF50" />
      <rect x="30" y="35" width="40" height="10" fill="white" />
      <rect x="30" y="50" width="30" height="10" fill="white" />
      <rect x="30" y="65" width="25" height="10" fill="white" />
      <line x1="30" y1="80" x2="70" y2="80" stroke="white" strokeWidth="2" />
    </svg>
  );
}
