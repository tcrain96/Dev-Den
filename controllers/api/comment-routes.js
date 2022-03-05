const router = require('express').Router();
const { Comment, User, Post, Vote } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    console.log('======================');
    Comment.findAll({
            // Query configuration
            attributes: [
                'id',
                'comment_text',
                'created_at',
                [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE comment.id = vote.comment_id)'), 'vote_count']
            ],
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    ;
});

router.get('/:id', (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'comment_text',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE comment.id = vote.comment_id)'), 'vote_count']
        ],
        include: [
            // include the Comment model here:
            {
                model: Post,
                attributes: ['id', 'comment_text', 'comment_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No comment found with this id' });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    ;
});

router.post('/', withAuth, (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        // use the id from the session
        user_id: req.session.user_id
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    ;
});

// PUT /api/posts/upvote
router.put('/upvote', withAuth, (req, res) => {
    // make sure the session exists first
    if (req.session) {
        // pass session id along with all destructured properties on req.body
        Comment.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Post, User })
            .then(updatedVoteData => res.json(updatedVoteData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
        ;
    }
});

router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No comment found with this id' });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
        ;
});

module.exports = router;