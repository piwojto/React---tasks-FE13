import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({children})=>{
   return (<div className="Table">
          <h1>Tabela nr 031/C/NBP/2020 z dnia 2020-02-13</h1>
          <TableHead>
             {children}
          </TableHead>
          <TableBody>
            {children}
          </TableBody>
      </div>);
}

export default Table;
