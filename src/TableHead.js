import React from 'react';

const TableHead = (props)=>{
     return(
     <table className="tg">
       <thead>
              <tr>
                  <th className="head">Nazwa waluty</th>
                  <th className="head">Kod waluty</th>
                  <th className="head">Kurs kupna</th>
                  <th className="head">Kurs sprzedaży</th>
              </tr>
        </thead>
    </table>
    )
}

export default TableHead;