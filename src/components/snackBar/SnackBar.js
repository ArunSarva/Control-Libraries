import React, { useState, useEffect } from "react";
import "./SnackBar.css";

function Snackbar({ bgColor, message, duration = 3000, onClose }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      style={{ backgroundColor: bgColor ? bgColor : "#3eb50c" }}
      className={`snackbar ${open ? "show" : ""}`}
    >
      {message}
    </div>
  );
}

export default Snackbar;
