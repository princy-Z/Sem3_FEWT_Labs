import React, { useEffect, useState } from "react";

export default function A1() {
  const [data, setData] = useState({
    FacultyID: "",
    FacultyName: "",
    Facultyexp: "",
    FacultyImage: "",
  });

  const [facultyList, setFacultyList] = useState([]);

  const [editIndex, setEditInadex] = useState(null);

  const handleClick = () => {
    if (
      !data.FacultyName ||
      !data.Facultyexp ||
      !data.FacultyImage ||
      !data.FacultyID
    ) {
      alert("Fill All details...!");
      return;
    }

    if (editIndex !== null) {
      const updateList = [...facultyList];

      updateList[editIndex] = data;

      setFacultyList(updateList);

      setEditInadex(null);
    } else {
      setFacultyList([...facultyList, { ...data }]);
    }

    setData({
      FacultyID: "",
      FacultyName: "",
      Facultyexp: "",
      FacultyImage: "",
    });
  };

  const handleEdit = (index) => {
    setData(facultyList[index]);
    setEditInadex(index);
  };

  const handleDelete = (index) => {
    const updateList = [
      ...facultyList.slice(0, index),
      ...facultyList.slice(index + 1),
    ];

    setFacultyList(updateList);

    if (editIndex === index) {
      setEditInadex(null);

      setData({
        FacultyID: "",
        FacultyName: "",
        Facultyexp: "",
        FacultyImage: "",
      });
    }
  };

  useEffect(() => {
    fetch("https://6aab8eafea0e22daa6dc4e32.mockapi.io/faculties")
      .then((res) => res.json())
      .then((res) => setFacultyList(res));
  }, []);

  return (
    <>
      <div className="detailDiv">
        <h2>Faculty details</h2>

        <label>Faculty ID : </label>
        <input
          type="text"
          name="FacultyID"
          value={data.FacultyID}
          onChange={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
        />
        <br />

        <label>Faculty name : </label>
        <input
          type="text"
          name="FacultyName"
          value={data.FacultyName}
          onChange={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <label>Faculty image : </label>
        <input
          type="text"
          name="FacultyImage"
          value={data.FacultyImage}
          onChange={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <label>Faculty Exp : </label>
        <input
          type="number"
          name="Facultyexp"
          value={data.Facultyexp}
          onChange={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
        />
        <br />

        <button onClick={handleClick}>
          {editIndex === null ? "ADD Faculty" : "UPDATE Faculty"}
        </button>
      </div>

      <table border={3} className="table table-bordered border-dark w-75">
        <thead
          style={{
            backgroundColor: " rgb(3, 12, 65)",
            color: "whitesmoke",
            textAlign: "center"
          }}
        >
          <th>Faculty ID</th>
          <th>Faculty Name</th>
          <th>Faculty Image</th>
          <th>Faculty EXP</th>
          <th>Action</th>
        </thead>

        <tbody>
          {facultyList.map((fac, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{fac.FacultyID}</td>

                  <td>{fac.FacultyName}</td>

                  <td >
                    <img src={fac.FacultyImage} height="20%" width="20%" />
                  </td>

                  <td>{fac.Facultyexp}</td>

                  <td>
                    <button
                      id="editBtn"
                      onClick={() => {
                        handleEdit(index);
                      }}
                    >
                      Edit
                    </button>
                    <br />
                    <button
                      id="deleteBtn"
                      onClick={() => {
                        handleDelete(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
