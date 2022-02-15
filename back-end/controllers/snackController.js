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
if (allSnacks) {
    res.json({ success: true, payload: allSnacks });
}
})



snacks.get('/:id', async (req, res) => {
const { id } = req.params;
console.log("Congrats you have a snack")
const aSnack = await getASnack(id)
if (aSnack) {
    res.json({ success: true, payload: aSnack });
} else {
    res.status(404).send({success: false, payload:"/not found/"})
}
})




snacks.post('/', async (req, res) => {
console.log("Please add a snack I'm hungry")
const { body } = req
const newSnack = await createSnack(body)
if (newSnack) {
    res.json({ success: true, payload: newSnack });
};
})



snacks.delete('/:id', async(req, res) => {
const { id } = req.params;
const deletedSnack = await deleteASnack(id)
deletedSnack.result ? 
res.status(404).send({ success: false, payload: `Invalid ${id}` }) : 
res.status(200).json({ success: true, payload: deletedSnack })
});



snacks.put('/:id', async (req, res) => {
const { id } = req.params;
const { body } = req;
const updatedSnack = await updateASnack(body, id)
res.status(200).json(updatedSnack)
})



module.exports = snacks; 