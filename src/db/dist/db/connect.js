"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.db = void 0;
require('dotenv').config({ path: '.env.local' });
// Load MongoDB driver
var _a = require('mongodb'), MongoClient = _a.MongoClient, ServerApiVersion = _a.ServerApiVersion;
// Load X.509 certificate
var credentials = 'src/db/X509-cert-8353495866188156371.pem';
// Create new MongoClient instance
var client = new MongoClient(process.env.MONGOURL, {
    tlsCertificateKeyFile: credentials,
    serverApi: ServerApiVersion.v1
});
exports.client = client;
var db = client.db('EventSync');
exports.db = db;
