const config = {
    user        : "sa", // Database username
    password    : "DressIt", // Database password
    server      : "localhost", // Server IP address
    database    : "DressIt", 
    port        : 1433,
    options : {
        trustServerCertificate : true,
        trustedConnection : true,
        encrypt:true
   }
}

export default config;