const mongoose = require('mongoose');
const express = require ('express');
const database = require('./database');
const notes = require ('./notes.json');

const seedDb = async()=>{
    database.insertMany(notes);
    console.log("Seed Run Completed!");
    console.log("Haga Refresh en la pagina!");
}

seedDb();
