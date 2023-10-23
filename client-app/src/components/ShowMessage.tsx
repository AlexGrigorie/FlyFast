import React from "react";

interface Props {
  message: string;
}

const ShowMessage = ({ message }: Props) => {
  return (
    <div className="text-2xl bg-green-500 text-white p-5 absolute top-12 right-16  rounded-lg">
      {message}
    </div>
  );
};

export default ShowMessage;
