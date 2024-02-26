function newfun1(marks) {
    return `
    CASE
      WHEN ${marks}>70 THEN 'P'
      WHEN ${marks}>85 THEN 'P1'
    ELSE
    'other'
    end
    `;
}


module.exports={newfun1};