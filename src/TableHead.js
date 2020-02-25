import React from 'react';

const TableHead = ()=>{
     return(
         <thead>
              <tr>
                  <th className="head">Nazwa waluty</th>
                  <th className="head">Kod waluty</th>
                  <th className="head">Kurs kupna</th>
                  <th className="head">Kurs sprzedaży</th>
              </tr>
        </thead>
      )
}

export default TableHead;