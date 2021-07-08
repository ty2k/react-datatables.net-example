import { useEffect } from "react";

import './App.css';
import 'datatables.net-dt/css/jquery.dataTables.css';

window.$ = require('jquery');
const dt = require('datatables.net');
window.$.DataTable = dt;

function App() {

  // See documentation for the `useEffect` hook here:
  // https://reactjs.org/docs/hooks-effect.html
  //
  // The second argument `[]` is shorthand for:
  // "run this effect only once on mount, and clean it up after unmount."
  useEffect(() => {

    // <table id="table"> is already on the DOM when this is called
    window.$("#table").DataTable();

  }, []);

  return (
    <div className="App">
      <table id="table">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
          </tr>
          <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
          </tr>
          <tr>
            <td>Row 3, Column 1</td>
            <td>Row 3, Column 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
