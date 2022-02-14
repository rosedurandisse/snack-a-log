const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    console.log(allSnacks);
    return allSnacks;
  } catch (error) {
    console.log(error)
    return error;
  }
};

const getASnack = async (id) => {
  try {
    const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return oneSnack;
  } catch (error) {
    error;
  }
};

//update line 27 to be the snack object versus listed each key
const createSnack = async (snackObj) => {
  const { name, fiber, protein, added_sugar, is_healthy, image } = snackObj; 
  try {
    const createdSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image]
    );

    if(createdSnack.image === null){
      createdSnack.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
    }

    let capWord = (name) => 
      name.length > 2 ?
      name[0].toUpperCase() + name.slice(1).toLowerCase():
      name;
    let capitalizeName = () => 
      name.split(' ').map(capWord).join(' ');
    
    createdSnack.name = capitalizeName(createdSnack.name);
  
    return createdSnack;
  } catch (error) {
    return error;
  }
};


const deleteASnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      id
    );
    return deletedSnack;
  } catch (error) {
    return error;
  }
};

const updateASnack = async (snackObj, id) => {
  const { name, fiber, protein, added_sugar, is_healthy, image } = snackObj;
  try {
    const updatedSnack = await db.one(
      "UPDATE snacks SET name=$2, fiber=$3, protein=$4, added_sugar=$5, is_healthy=$6, image=$7 WHERE id=$1 RETURNING *",
      [id, name, fiber, protein, added_sugar, is_healthy, image]
    );
    return updatedSnack;
  } catch (error) {
    console.log(error)
    return error;
  }
};

module.exports = {
  getAllSnacks,
  getASnack,
  createSnack,
  deleteASnack,
  updateASnack,
};
