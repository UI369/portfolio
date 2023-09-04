// components/DatabaseForm.tsx

import React, { useState } from "react";

const DatabaseForm: React.FC = () => {
  const [dbName, setDbName] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = JSON.stringify({ dbName });

    const newDBResponse = await fetch("/databases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const newDBData = await newDBResponse.json();
    appendApiResponse(newDBData);
  };

  const appendApiResponse = (data: any) => {
    // Here, you can append the data to the DOM or set it in a state variable.
    // For this example, I'll just log it.
    console.log(data);
  };

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h3>1. Create a new database</h3>
            <form id="databaseForm" onSubmit={handleSubmit}>
              <label htmlFor="dbName">Database name</label>
              <input
                type="text"
                id="dbName"
                value={dbName}
                onChange={(e) => setDbName(e.target.value)}
              />
              <input type="submit" />
            </form>
          </td>
          <td id="dbResponse"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default DatabaseForm;
