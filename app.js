const fs = require('fs');
const path = require('path');

const myDir = path.join('C:', 'users', 'swara', 'downloads');
const dirimages = path.join(myDir, 'Images')
const dirvideos = path.join(myDir, 'Videos');
const diraudios = path.join(myDir, 'Audios');
const dirdocs = path.join(myDir, 'Documents');
const dirprograms = path.join(myDir, 'Programs');

fs.access(dirimages, (error) => {
    if(error) {
        fs.mkdirSync(dirimages);
    }
})
fs.access(dirvideos, (error) => {
    if(error) {
        fs.mkdirSync(dirvideos);
    }
})
fs.access(diraudios, (error) => {
    if(error) {
        fs.mkdirSync(diraudios);
    }
})
fs.access(dirdocs, (error) => {
    if(error) {
        fs.mkdirSync(dirdocs);
    }
})
fs.access(dirprograms, (error) => {
    if(error) {
        fs.mkdirSync(dirprograms);
    }
})


const image = ['.png', '.jpg', '.jpeg', '.gif'];
const video = ['.mkv', '.mp4', '.avi', '.3gp'];
const audio = ['.mp3', '.aac', '.wav'];
const doc = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.txt']
const program = ['.exe', '.msi'];

fs.readdir(myDir, (err, files) => { 
    files.forEach((file) => {
        const oldPath = path.join(myDir, file);
        if (image.includes(path.extname(file))) {
            const images = path.join(dirimages, file);
            fs.rename(oldPath, images, () => console.log(`${file} has been moved to /Images!`)
            )
        }
        if (video.includes(path.extname(file))) {
            const videos = path.join(dirvideos, file);
            fs.rename(oldPath, videos, () => console.log(`${file} has been moved to /Videos!`)
            )
        }
        if (audio.includes(path.extname(file))) {
            const audios = path.join(diraudios, file);
            fs.rename(oldPath, audios, () => console.log(`${file} has been moved to /Audios!`)
            )
        }
        if (doc.includes(path.extname(file))) {
            const docs = path.join(dirdocs, file);
            fs.rename(oldPath, docs, () => console.log(`${file} has been moved to /Documents!`)
            )
        }
        if (program.includes(path.extname(file))) {
            const programs = path.join(dirprograms, file);
            fs.rename(oldPath, programs, () => console.log(`${file} has been moved to /Programs!`)
            )
        }
    }
    )
    if (err) 
        console.log(err);
}
)
