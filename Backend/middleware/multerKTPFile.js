const express = require('express')
// const router = express.Router()
const multer = require('multer')


// Menentukan lokasi pengunggahan
const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploadsKTP')
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-')
        cb(null, file.fieldname + '-' + Date.now() + '-' + fileName)
    }
})

// Menerapkan middleware multer hanya pada rute berikut:
const fileMulterKTP = multer ({
    storage: diskStorage,
    limits: { fileSize: 10000000 }
})

module.exports = fileMulterKTP