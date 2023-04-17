/*
Ödev 4
FS File System Modülü


Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.


employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.



*/

const fs = require('fs');

const createFile = () => fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log("employees.json file created and employee object instantiated");
});

const readFromFile = () => fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) {console.log(err);}
    console.log(data);
    console.log("employees.json file readed");
});
const updateDataInTheFile = () => fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) {console.log(err);}
    console.log("employees.json fileı güncelleniyor...");
    let newData = JSON.parse(data);
    newData.name = "Serkan Berk";
    fs.writeFile('employees.json', JSON.stringify(newData), 'utf-8', (err) => {
        if (err) console.log(err);
        console.log("Başarıyla güncellendi!");
    });
});

const removeFile = () => fs.unlink('employees.json', (err) => { 
    if (err) console.log(err); 
    console.log("Employees.json silindi");
});


/*
createFile();
readFromFile();
updateDataInTheFile();
removeFile();
*/