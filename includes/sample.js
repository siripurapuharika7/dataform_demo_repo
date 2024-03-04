// const { assert } = require("@dataform/core");

// module.exports = {
//   assertion1: assert("assertion1")
//     .query(ctx => `SELECT * FROM \`secure-potion-409606.harika_dataset.orgtbl\` WHERE age > 20`)
//     .dependencies(["orgtbl"])
// };

// // Custom JavaScript code to capture assertion errors and insert failed records into a Dataform table
// module.exports.assertions = async (db) => {
//   try {
//     // Execute the assertion query in BigQuery
//     const assertionResult = await db.query("SELECT * FROM your_table WHERE condition");
//     // Check if the assertion failed
//     if (assertionResult.length === 0) {
//       // If assertion failed, insert the failed records into a table in Dataform
//       await db.insertInto("failed_assertion_records")
//         .select(assertionResult)
//         .run();
//     }
//   } catch (error) {
//     // Handle any unexpected errors
//     console.error("An error occurred while executing assertions:", error);
//   }
// };

