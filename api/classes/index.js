const express = require('express');
const router = express.Router();

const classController = require('./classController');

/* GET classes listing. */
router.get('/', classController.list);

/* GET classes detail. */
router.get('/:id', classController.detail);

router.post('/', classController.create);

module.exports = router;
