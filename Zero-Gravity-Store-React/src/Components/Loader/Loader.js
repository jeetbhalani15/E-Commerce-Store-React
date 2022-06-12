import { useState } from "react";
import { HashLoader } from "react-spinners";
import "./Loader.css";
export const Loader = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="loader">
      <HashLoader size={60} color={"orange"} loading={loading} />
    </div>
  );
};
