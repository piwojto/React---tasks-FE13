import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({children})=>{
console.log(children);
   return (<div className="Table">
          <h1>Tabela nr 031/C/NBP/2020 z dnia 2020-02-13</h1>
         
         <table className="tg">
             {children}
         </table>
</div>)};

export default Table;
