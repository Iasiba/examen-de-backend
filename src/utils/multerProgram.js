const multer = require('multer')
const path = require('path')

const uploadPrograms=()=>{
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve('media/programs'))
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
    return multer({storage}) 
}
/*
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('media/programs/'))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const uploadPrograms = multer({storage})
*/
exports.uploadPrograms = uploadPrograms



















const updateCover = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve('uploads/covers'))
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
    
    const upload = multer({storage})
    return upload
}
const updateChapter = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve('uploads/chapters'))
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
    
    const upload = multer({storage})
    return upload
}
module.exports = {
    updateChapter,
    updateCover
}