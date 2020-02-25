import React from 'react';
import Table from './Table';
import TableBody from './TableBody';
import TableHead from './TableHead';

function App() {
   return (
    <div className="App">
        <Table>
          <TableHead/>
          <TableBody/>
        </Table>
       
     </div>
  );
}

export default App;
