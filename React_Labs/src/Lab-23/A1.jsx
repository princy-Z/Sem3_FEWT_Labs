import React, { useState } from "react";

export default function A1() {
  const [data, setData] = useState({
    id: "",
    productName: "",
    image: "",
    quantity: "",
    price: "",
    category: "",
  });

  const [productList, setProductList] = useState([]);

  const [editIndex, setEditInadex] = useState(null);

  const handleClick = () => {
    if (!data.productName || !data.quantity || !data.price || !data.category) {
      alert("Fill All details...!");
      return;
    }

    if (editIndex !== null) {
      const updateList = [...productList];

      updateList[editIndex] = data;

      setProductList(updateList);

      setEditInadex(null);
    } else {
      setProductList([...productList, { ...data }]);
    }

    setData({
      productName: "",
      image: "",
      quantity: "",
      price: "",
      category: "",
    });
  };

  const handleEdit = (index) => {
    setData(productList[index]);
    setEditInadex(index);
  };

  const handleDelete = (index) => {
    const updateList = [
      ...productList.slice(0, index),
      ...productList.slice(index + 1),
    ];

    setProductList(updateList);

    if (editIndex === index) {
      setEditInadex(null);

      setData({
        productName: "",
        image: "",
        quantity: "",
        price: "",
        category: "",
      });
    }
  };
  
  return (
    <>
      <div className="detailDiv">
        <h2>Product details</h2>

        <label>Product name : </label>
        <input
          type="text"
          value={data.productName}
          onChange={(e) => {
            setData({ ...data, productName: e.target.value });
          }}
        />
        <br />
        <label>Product image : </label>
        <input
          type="text"
          value={data.image}
          onChange={(e) => {
            setData({ ...data, image: e.target.value });
          }}
        />
        <br />
        <label>Product quantity : </label>
        <input
          type="number"
          value={data.quantity}
          onChange={(e) => {
            setData({ ...data, quantity: e.target.value });
          }}
        />
        <br />
        <label>Product price : </label>
        <input
          type="number"
          value={data.price}
          onChange={(e) => {
            setData({ ...data, price: e.target.value });
          }}
        />
        <br />
        <label>Product category : </label>
        <input
          type="text"
          value={data.category}
          onChange={(e) => {
            setData({ ...data, category: e.target.value });
          }}
        />
        <br />

        <button onClick={handleClick}>
          {editIndex === null ? "ADD Product" : "UPDATE Product"}
        </button>
      </div>

      <table border={2} className="table table-bordered border-dark">
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>IMAGE</th>
          <th>CATEGORY</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
          <th>Actions</th>
        </thead>

        <tbody>
          {productList.map((prod, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{index + 1}</td>

                  <td>{prod.productName}</td>

                  <td>
                    <img src={prod.image} />
                  </td>

                  <td>{prod.category}</td>

                  <td>{prod.quantity}</td>

                  <td>{prod.price}</td>

                  <td>
                    <button
                      onClick={() => {
                        handleEdit(index);
                      }}
                    >
                      Edit
                    </button>
                    <button
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
