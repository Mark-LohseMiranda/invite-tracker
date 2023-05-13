import React, { useEffect } from "react";
import API from "../../Util/API";

export default function Numbers({ numbers, setNumbers }) {
  useEffect(() => {
    API.getNumbers()
      .then((res) => {
        setNumbers(res.data);
      })
      .catch((err) => console.log(err));
  }, [setNumbers]);

  return (
    <div className="pt-5 text-center text-white">
      Guests Attending: {numbers?.guests} 
    </div>
  );
}
