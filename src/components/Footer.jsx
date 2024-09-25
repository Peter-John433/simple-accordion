import { useState } from "react";

export default function Footer() {
  const myDate = new Date();
  return <div>All right reserve,PJ&copyright; @ {myDate.getFullYear()} </div>;
}
