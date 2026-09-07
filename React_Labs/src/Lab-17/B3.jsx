import React from "react";

export default function B3()
{
    const Students = [
        {ErNo: 2501010101,name:"Zalavadiya Princy",spi:8.9},
        {ErNo: 2501010102,name:"Agravat Ayushi",spi:8.0},
        {ErNo: 2501010103,name:"Sakhiya Tulsi",spi:9.1},
        {ErNo: 2501010104,name:"Pithdiya Riya",spi:7.9}
    ];

    const data = Students.map(
       (temp) => (
                <tr key={temp.ErNo}>
                    <td>{temp.ErNo}</td>
                    <td>{temp.name}</td>
                    <td>{temp.spi}</td>
                </tr>
        )
    )
    return(
        <> 
            <h1>Students</h1>
            <table className="table table-dark table-striped-columns w-25">
                <thead>
                    <tr>
                        <td><b>Er No.</b></td>
                        <td><b>Name</b></td>
                        <td><b>SPI</b></td>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        </>
    )
}
