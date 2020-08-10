
const students = [
    {id:23, name:"Depjol"},
    {id:33, name:"chikon ali"},
    {id:51, name:"Sabnur"},
    {id:56, name:"Omor sany"}
]
const name =students.map(s => s.name);
const ids = students.map(id =>id.id);
const filter = students.filter(x => x.id < 50 )
const filterone = students.find(x => x.id > 50 )

console.log(filterone);