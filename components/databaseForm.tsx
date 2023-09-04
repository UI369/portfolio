// components/DatabaseForm.tsx

import React from "react";

const DatabaseForm: React.FC = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h3>1. Create a new database</h3>
            <form id="databaseForm">
              <label htmlFor="dbName">Database name</label>
              <input type="text" id="dbName" />
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
