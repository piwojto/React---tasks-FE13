import React from 'react';

const TableHead = (props)=>{
    const {children}=props;
    return(<table className="tg">
        {children}
    </table>)
}

export default TableHead;