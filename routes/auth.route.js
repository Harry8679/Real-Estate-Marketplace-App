import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        data: 'Hello from NodeJS'
    });
});

export default router;
// module.exports = router;