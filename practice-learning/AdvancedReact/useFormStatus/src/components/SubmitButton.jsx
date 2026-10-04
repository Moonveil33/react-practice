import React from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending, data, action, method } = useFormStatus();

  console.log(`Pending: ${pending}`);
  console.log(`Data: ${data}`);
  console.log(`Action: ${action}`);
  console.log(`Method: ${method}`);

  return (
    <button disabled={pending}>
      {pending ? "در حال افزودن ..." : "افزودن"}
    </button>
  );
}

export default SubmitButton;
