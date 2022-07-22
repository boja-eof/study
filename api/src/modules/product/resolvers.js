import db from "../../setup/database";

// Get all products
export async function getAll() {
  return db.getData("/products");
}
