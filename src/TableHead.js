import React from 'react';

const TableHead = ()=>{
    return(<table className="tg">
    <tr>
        <th class="head">Nazwa waluty</th>
        <th class="head">Kod waluty</th>
        <th class="head">Kurs kupna</th>
        <th class="head">Kurs sprzedaży</th>
    </tr>
    </table>)
}

export default TableHead;