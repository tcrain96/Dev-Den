const router = require('express').Router();
const { Post, User, Vote, Comment, Skill } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Skill.findAll({
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    ;
  
});

router.get('/:id', (req, res) => {
    Skill.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbSkillData => {
            if (!dbSkillData) {
                res.status(404).json({ message: 'No skill found with this id' });
                return;
            }
            res.json(dbSkillData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    ;
});

router.post('/', withAuth, (req, res) => {
    // expects {title: 'Taskmaster goes public!', post_text: 'https://taskmaster.com/press', user_id: 1}
    Skill.create({
        skill_name: req.body.skill_name,
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    ;
});

router.delete('/:id', (req, res) => {
    Skill.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No skill found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    ;
});

module.exports = router;