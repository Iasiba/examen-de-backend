const multer = require('multer')
const path = require('path')

const uploadChapter=()=>{
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve('media/chapters'))
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
        cb(null, path.resolve('media/chapters'))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const uploadChapter = multer({storage})
*/
exports.uploadChapter = uploadChapter