import React from "react";
import "./ComplaintFile.css";

export default function ComplaintFile() {
  return (
    <div
      className="container justify-content-center shadow p-auto mt-5 bg-light"
      style={{ height: "35rem" }}
    >
      <form>
        <h1>File Complaint</h1>
        <div className="form-group ">
          <label htmlFor="exampleFormControlInput1">Login id</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={10}
            defaultValue={""}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
