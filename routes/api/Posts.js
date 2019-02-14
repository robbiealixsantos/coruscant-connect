const express = require('express');
const router = express();

// GET api/post/test
// Tests posts route 
router.get('/test', (req, res) => res.json({msg: "Posts Works"}));

module.exports = router;