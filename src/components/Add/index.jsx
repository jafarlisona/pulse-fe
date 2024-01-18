import React, { useEffect, useState } from "react";
import "./index.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Add() {
  const [menu, setMenu] = useState([]);
  const [search, setSearch] = useState("");
  function getAll(params) {
    fetch("http://localhost:3000/menu/")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }
  useEffect(() => {
    getAll();
  }, []);
  async function handleSubmit(values) {
    await fetch("http://localhost:3000/menu/", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    getAll();
  }
  async function deleteItem(id) {
    await fetch("http://localhost:3000/menu/" + id, {
      method: "DELETE",
    });
    getAll();
  }

  return (
    <section id="add">
      <div className="container">
        <Formik
          initialValues={{ name: "", image: "", price: 0, description: "" }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(5, "Must be 5 characters or more")
              .required("Required"),
            image: Yup.string()
              .min(5, "Must be 5 characters or more")
              .required("Required"),
            price: Yup.number().positive().required("Required"),
            description: Yup.string()
              .min(20, "Must be 20 characters or more")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values);
            setSubmitting(false);
            resetForm();
          }}
        >
          <Form>
            <div className="form">
              <label htmlFor="name">Name :</label>
              <div className="field">
                <Field name="name" type="text" />
                <ErrorMessage name="name" component={"span"} />
              </div>
            </div>

            <div className="form">
              <label htmlFor="image">Image :</label>
              <div className="field">
                <Field name="image" type="text" />
                <ErrorMessage name="image" component={"span"} />
              </div>
            </div>

            <div className="form">
              <label htmlFor="price">Price :</label>
              <div className="field">
                <Field name="price" type="number" />
                <ErrorMessage name="price" component={"span"} />
              </div>
            </div>

            <div className="form">
              <label htmlFor="description">Description :</label>
              <div className="field">
                <Field name="description" type="text" as="textarea" />
                <ErrorMessage name="description" component={"span"} />
              </div>
            </div>

            <button type="submit">Add</button>
          </Form>
        </Formik>
        <div className="table">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu
                .filter((x) =>
                  x.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((x) => (
                  <tr key={x._id}>
                    <td>
                      <img src={x.image} alt="" width={"200px"} />
                    </td>
                    <td>{x.name}</td>
                    <td>{x.description}</td>
                    <td>${x.price.toFixed(2)}</td>
                    <td>
                      <i
                        className="fa-regular fa-trash-can"
                        onClick={() => deleteItem(x._id)}
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Add;
