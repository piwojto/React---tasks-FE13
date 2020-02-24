import React from 'react';

const tableTD = [
    {	id:'dolar australijski',	name:'1 AUD',	buy:'2,6147',	sell:'2,6675',	},
    {	id:'dolar kanadyjski',	name:'1 CAD',	buy:'2,9291',	sell:'2,9883',	},
    {	id:'euro',	name:'1 EUR',	buy:'4,2124',	sell:'4,2976',	},
    {	id:'forint (Węgry)',	name:'100 HUF',	buy:'1,249',	sell:'1,2742',	},
    {	id:'frank szwajcarski',	name:'1 CHF',	buy:'3,9674',	sell:'4,0476',	},
    {	id:'funt szterling',	name:'1 GBP',	buy:'5,0615',	sell:'5,1637',	},
    {	id:'jen (Japonia)',	name:'100 JPY',	buy:'3,5365',	sell:'3,6079',	},
    {	id:'korona czeska',	name:'1 CZK',	buy:'0,1694',	sell:'0,1728',	},
    {	id:'korona duńska',	name:'1 DKK',	buy:'0,5638',	sell:'0,5752',	},
]

const TableBody = ()=>{
    return(<table className="tg">
         {tableTD.map((element, key) => {
         const { id, name, buy, sell } = element 
         return (
            <tbody>
               <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{buy}</td>
                  <td>{sell}</td>
               </tr>
            </tbody>
         )
      })
      }
          </table>)}   

export default TableBody;