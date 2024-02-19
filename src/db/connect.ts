require('dotenv').config({ path: '.env.local'});

// Load MongoDB driver
const { MongoClient, ServerApiVersion } = require('mongodb');
// Load X.509 certificate
const credentials = 'src/db/X509-cert-8353495866188156371.pem';
// Create new MongoClient instance
const client = new MongoClient(process.env.MONGOURL, {
    tlsCertificateKeyFile: credentials,
    serverApi: ServerApiVersion.v1
});


const db = client.db('EventSync');
// Export db connection
export {db, client};