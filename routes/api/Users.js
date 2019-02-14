const express = require('express');
const router = express();

// GET api/users/test
// Tests users route 
// Public
router.get('/test', (req, res) => res.json({msg: "Users Works"}));

module.exports = router;