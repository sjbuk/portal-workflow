const sqlconfig = {
  database: "K2_App_Dorsum",
  // can keep these option required with latest version of mssql npm package
  options: {
    enableArithAbort: true,
    encrypt: true,
    rowCollectionOnRequestCompletion: false,
  },
  parseJSON: true,
  password: "dorsum",
  port: 1433, // if youe database running on difrent port then 1433
  server: "localhost",
  user: "dorsum",
};

export { sqlconfig };
