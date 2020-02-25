// 3 komponenty
// https://www.w3schools.com/tags/tag_thead.asp


// wymyślić jakieś dane do tabelki
// zakodować tabelke w normalnym html i wyświetlić ją w apce reacta

const TempTable = ()=>{
    return (<table>
      <thead>
        <tr>
          <th>Month</th>
          <th>Savings</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>February</td>
          <td>$80</td>
        </tr>
      </tbody>

    </table>)
  }

// podzielić tabelkę na thead i tbody
// umieścić thead w komponencie TableHead
// umieścić tbody w komponencie TableBody

// złożyć tabelkę w komponencie Table z componentów TableHead, TableBody
// wyrenderować komponent Table w apce reacta

// nie zrobiłeś komponentu <Table>
// który przyjmuje komponenty <TableHead> i <TableBody> jako dzieci

// THead i TBody ma nie mieć dzieci
// ma mieć na sztywno wrzucone ifnormacje
// ale w <Table> ma być prop children
// który przy wywołaniu <Table> np w App.js pozwoli wyświetlić THead i TBody jako dzieci

// children
// ale nie w tym miejscu co potrzeba


const Table = ()=>{

}
const TableHead = ()=>{

}
const TableBody = ()=>{

}

