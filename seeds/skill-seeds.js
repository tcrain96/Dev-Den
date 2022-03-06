const { Skill } = require('../models');

const postdata = [
  {
      skill_name: 'HTML',
      user_id: 1
  },
  {
      skill_name: 'CSS',
      user_id: 1
  },
  {
      skill_name: 'JavaScript',
      user_id: 1
  },
  {
      skill_name: 'Node.js',
      user_id: 1
  },
  {
      skill_name: 'Express.js',
      user_id: 1
  },
  {
      skill_name: 'TTD',
      user_id: 1
  },
  {
      skill_name: 'MVC',
      user_id: 1
  },
  {
      skill_name: 'SQL',
      user_id: 1
  },
  {
      skill_name: 'MySQL',
      user_id: 1
  }
];

const seedSkills = () => Skill.bulkCreate(postdata);

module.exports = seedSkills;