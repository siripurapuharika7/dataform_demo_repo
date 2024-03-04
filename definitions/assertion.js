assert("assertion1").query(ctx =>"SELECT * FROM  `secure-potion-409606.harika_dataset.orgtbl` WHERE age>20"
).dependencies([
"orgtbl"
]);


assert("assertion2").query(ctx => "SELECT * FROM  `secure-potion-409606.harika_dataset.asset2tbl` WHERE id>4").dependencies(["asset2tbl"]);


