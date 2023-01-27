import react from "react";

const Dash = ({ containerClass, dashClass, title}) => (
    <div className={containerClass}>
              <div className={dashClass}></div>
              <h2>{title}</h2>
            </div>
)

export default Dash