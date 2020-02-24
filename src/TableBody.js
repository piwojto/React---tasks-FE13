import React from 'react';

const TableBody = (props)=>{
    const {children}=props;
    return(<table className="tg">
        {children}
    </table>)
}

export default TableBody;