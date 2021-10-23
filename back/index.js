const dbConnection = require('./db/config');
require('dotenv').config();
const express = require('express');

dbConnection();