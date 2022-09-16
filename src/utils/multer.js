const multer = require('multer')
const path = require('path')

const upload=()=>{
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
        cb(null, path.resolve('uploads/'))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({storage})
*/

exports.upload = upload