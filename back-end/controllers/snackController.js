const express = require("express");
const { 
getAllSnacks,
getASnack,
createSnack,
deleteASnack,
updateASnack
} = require("../queries/snacks");

const snacks = express.Router();

snacks.get('/', async (req, res) => {
console.log("GET / from snacks")
const allSnacks = await getAllSnacks();
res.status(200).json(allSnacks);
})


snacks.get('/:id', async (req, res) => {
const { id } = req.params;
console.log("Congrats you have a snack")
const aSnack = await getASnack(id)
res.status(200).json(aSnack);
})




module.exports = snacks; 