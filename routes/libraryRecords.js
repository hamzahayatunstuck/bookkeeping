const express = require('express');
const router = express.Router();
const {addLibraryRecord, getLibraryRecords, updateLibraryRecord, deleteLibraryRecord} = require('../controllers/libraryRecord');
router.post('/add-library-record', addLibraryRecord);
router.get('/get-library-records', getLibraryRecords);
router.put('/update-library-record/:id', updateLibraryRecord);
router.delete('/delete-library-record/:id', deleteLibraryRecord);

module.exports = router;