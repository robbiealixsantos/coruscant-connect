const express = require('express');
const router = express();

// GET api/profiles/test
// Tests profiles route 
// Public
router.get('/test', (req, res) => res.json({msg: "Profile Works"}));

module.exports = router;