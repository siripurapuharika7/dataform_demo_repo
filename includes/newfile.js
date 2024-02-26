const sql_query = "SELECT STRING_AGG(" +
    "CONCAT('t1.', column_name, ' <> t2.', column_name), ' OR ') " +
    "FROM (" +
    "SELECT column_name " +
    "FROM `secure-potion-409606.NanduSingireddy.INFORMATION_SCHEMA.COLUMNS` " +
    "WHERE table_name = 'info_1' " +
    ") AS cols"


module.exports={
  sql_query
}





