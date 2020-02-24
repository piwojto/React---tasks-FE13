import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ()=>{
   return (<div className="Table">
          <h1>Tabela nr 031/C/NBP/2020 z dnia 2020-02-13</h1>
          <TableHead>
            <thead>
              <tr>
                  <th className="head">Nazwa waluty</th>
                  <th className="head">Kod waluty</th>
                  <th className="head">Kurs kupna</th>
                  <th className="head">Kurs sprzedaży</th>
              </tr>
            </thead>
          </TableHead>
          <TableBody>
            <tbody>
                  <tr>
                  <td>dolar amerykański</td>
                  <td>1 USD</td>
                  <td>3,8807</td>
                  <td>3,9591</td>
              </tr>
              <tr>
                  <td>dolar australijski</td>
                  <td>1 AUD</td>
                  <td>2,6147</td>
                  <td>2,6675</td>
              </tr>
              <tr>
                  <td>dolar kanadyjski</td>
                  <td>1 CAD</td>
                  <td>2,9291</td>
                  <td>2,9883</td>
              </tr>
              <tr>
                  <td>euro</td>
                  <td>1 EUR</td>
                  <td>4,2124</td>
                  <td>4,2976</td>
              </tr>
              <tr>
                  <td>forint (Węgry)</td>
                  <td>100 HUF</td>
                  <td>1,2490</td>
                  <td>1,2742</td>
              </tr>
              <tr>
                  <td>frank szwajcarski</td>
                  <td>1 CHF</td>
                  <td>3,9674</td>
                  <td>4,0476</td>
              </tr>
              <tr>
                  <td>funt szterling</td>
                  <td>1 GBP</td>
                  <td>5,0615</td>
                  <td>5,1637</td>
              </tr>
              <tr>
                  <td>jen (Japonia)</td>
                  <td>100 JPY</td>
                  <td>3,5365</td>
                  <td>3,6079</td>
              </tr>
              <tr>
                  <td>korona czeska</td>
                  <td>1 CZK</td>
                  <td>0,1694</td>
                  <td>0,1728</td>
              </tr>
              <tr>
                  <td>korona duńska</td>
                  <td>1 DKK</td>
                  <td>0,5638</td>
                  <td>0,5752</td>
              </tr>
            </tbody>
          </TableBody>
      </div>);
}

export default Table;
