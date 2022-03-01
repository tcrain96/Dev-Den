const { Post } = require('../models');

const postdata = [
  {
    title: 'This is the first post',
    post_text: 'This first post is for testing purposes check the votes and the comments on the post!',
    user_id: 10,
    front_end: true,
    back_end: false,
    full_stack: false
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'https://nasa.gov/donec.json',
    user_id: 8,
    front_end: false,
    back_end: true,
    full_stack: false
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1,
    front_end: false,
    back_end: false,
    full_stack: true
  },
  {
    title: 'Nunc purus.',
    post_text: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4,
    front_end: true,
    back_end: true,
    full_stack: false
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7,
    front_end: true,
    back_end: true,
    full_stack: true
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text: 'https://stanford.edu/consequat.png',
    user_id: 4,
    front_end: false,
    back_end: true,
    full_stack: true
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1,
    front_end: false,
    back_end: false,
    full_stack: false
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1,
    front_end: false,
    back_end: false,
    full_stack: true 
  },
  {
    title: 'Duis ac nibh.',
    post_text: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9,
    front_end: false,
    back_end: false,
    full_stack: true 
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_text: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5,
    front_end: false,
    back_end: false,
    full_stack: true 
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
