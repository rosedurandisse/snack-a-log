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



snacks.post('/', async (req, res) => {
console.log("Please add a snack I'm hungry")
const { body } = req
const newSnack = await createSnack(body)
res.status(200).json(newSnack);
})



snacks.delete('/:id', async(req, res) => {
const { id } = req.params;
const deletedSnack = await deleteASnack(id)
res.status(200).json(deletedSnack)
})


snacks.put('/:id', async (req, res) => {
const { id } = req.params;
const { body } = req;
const updatedSnack = await updateASnack(body, id)
res.status(200).json(updatedSnack)
})



module.exports = snacks; 