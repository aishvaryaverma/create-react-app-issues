import React from "react";

const Spinner = ({ white }) => <div className={`lds-roller ${white ? 'white': ''}`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

export default Spinner