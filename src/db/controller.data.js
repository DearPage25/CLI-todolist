const fs = require('fs');
const PATH = './src/db/data.json'

const saveData = (data) => {
    
    fs.writeFileSync(PATH, JSON.stringify(data))

}

const readData = () => {
    if(!fs.existsSync(PATH)) return null;
    const info = fs.readFileSync(PATH, { encoding: 'utf-8' });
    return JSON.parse(info);
}

module.exports = {
    saveData,
    readData
}