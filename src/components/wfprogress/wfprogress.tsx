import React from "react";
import * as sql from "mssql";
import "./wfprogress.css";
import { sqlconfig } from "../../sqlconfig";

async function connectToSqlServer() {
  try {
    const pool = new sql.ConnectionPool(sqlconfig);
    await pool.connect()
    const request = new sql.Request(pool);
    const result = await request.query(`select * from mock_people`);
    console.dir(result);
  }
   catch (err) {
    console.error(err);
  }
}

function WfProgress() {
  connectToSqlServer();
  return <div className="WfProgress">Hello from WF PROGRESS </div>;
}

export default WfProgress;
