import React from "react";

export default function B2()
{
    const Fac = [
        {id:101,name:"Nilesh Gambhva",dept:"CSE"},
        {id:102,name:"Gopi Sanghani",dept:"CSE"},
        {id:103,name:"Arjun Bala",dept:"CSE"},
        {id:104,name:"Dhvanik Zala",dept:"CSE"}
    ];

    const data = Fac.map(
       (temp) => (
                <tr key={temp.id}>
                    <td>{temp.id}</td>
                    <td>{temp.name}</td>
                    <td>{temp.dept}</td>
                </tr>
        )
    )
    return(
        <>
        <h1>Faculties</h1>
            <table className="table table-success table-striped w-25">
                <thead>
                    <tr>
                        <td><b>FacultyID</b></td>
                        <td><b>Name</b></td>
                        <td><b>Department</b></td>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        </>
    )
}
