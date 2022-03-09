const { Post } = require('../models');

const postdata = [
  {
    title: 'Unwanted element shows up because of empty properties in an object',
    post_text: 'The initial state already contains an invincible string message and that makes an unwanted delete button appear initially. How can I remove this initial delete button and make sure that they only appear once the first "submit" is sent.',
    user_id: 10
  },
  {
    title: 'Trying to get button to sit slightly under the top of the page in header',
    post_text: 'Trying to get button to sit slightly under the top of the page in header',
    user_id: 8
  },
  {
    title: 'Massive delay between closing of <input type="file"> Select File Dialog and onchange event. Browser kind of freezing',
    post_text: 'One thing I noticed: If I have a network drive in my Windows Explorer Quick Access toolbar that is not reachable (because I am not connected with VPN), this massive delay problem occurs much more often (although I do select a file on my Desktop that has nothing to do with this network drive).',
    user_id: 1
  },
  {
    title: 'html force rerender div',
    post_text: 'I have flex row with max-height. wrapper of image have min-height:0; property for block height overflow; but after load image and shrink we see that wrapper of image is not recomputer has extra spaced (red rectangle). How i can recomputed div to shrink to image width?',
    user_id: 4
  },
  {
    title: 'Why did this happen? I actually found it cool, and wanna know how I made it.',
    post_text: 'I have completed the "3 Column Preview Card Component" of Front End Mentor. But the thing is, I really liked the way it changes the Button is top margin smootlhy after shrinking the screen from Desktop to Mobile and vice-versa. The point is i dont really know how i did this. And everything seems to be on the line 91 of the css, which contains the "button:not(:hover)" rule. If I remove that, that does not work.My question is: Why is that???? The transition is not even coded on the Media Query...',
    user_id: 7
  },
  {
    title: 'Unwanted element shows up because of empty properties in an object',
    post_text: 'The initial state already contains an invincible string message and that makes an unwanted delete button appear initially. How can I remove this initial delete button and make sure that they only appear once the first "submit" is sent.',
    user_id: 4
  },
  {
    title: 'Trying to get button to sit slightly under the top of the page in header',
    post_text: 'Trying to get button to sit slightly under the top of the page in header',
    user_id: 1
  },
  {
    title: 'Massive delay between closing of <input type="file"> Select File Dialog and onchange event. Browser kind of freezing',
    post_text: 'One thing I noticed: If I have a network drive in my Windows Explorer Quick Access toolbar that is not reachable (because I am not connected with VPN), this massive delay problem occurs much more often (although I do select a file on my Desktop that has nothing to do with this network drive).',
    user_id: 1
  },
  {
    title: 'html force rerender div',
    post_text: 'I have flex row with max-height. wrapper of image have min-height:0; property for block height overflow; but after load image and shrink we see that wrapper of image is not recomputer has extra spaced (red rectangle). How i can recomputed div to shrink to image width?',
    user_id: 9
  },
  {
    title: 'Why did this happen? I actually found it cool, and wanna know how I made it.',
    post_text: 'I have completed the "3 Column Preview Card Component" of Front End Mentor. But the thing is, I really liked the way it changes the Button is top margin smootlhy after shrinking the screen from Desktop to Mobile and vice-versa. The point is i dont really know how i did this. And everything seems to be on the line 91 of the css, which contains the "button:not(:hover)" rule. If I remove that, that does not work.My question is: Why is that???? The transition is not even coded on the Media Query...',
    user_id: 5
  },
  {
    title: 'Unwanted element shows up because of empty properties in an object',
    post_text: 'The initial state already contains an invincible string message and that makes an unwanted delete button appear initially. How can I remove this initial delete button and make sure that they only appear once the first "submit" is sent.',
    user_id: 3
  },
  {
    title: 'Trying to get button to sit slightly under the top of the page in header',
    post_text: 'Trying to get button to sit slightly under the top of the page in header',
    user_id: 10
  },
  {
    title: 'Massive delay between closing of <input type="file"> Select File Dialog and onchange event. Browser kind of freezing',
    post_text: 'One thing I noticed: If I have a network drive in my Windows Explorer Quick Access toolbar that is not reachable (because I am not connected with VPN), this massive delay problem occurs much more often (although I do select a file on my Desktop that has nothing to do with this network drive).',
    user_id: 8
  },
  {
    title: 'html force rerender div',
    post_text: 'I have flex row with max-height. wrapper of image have min-height:0; property for block height overflow; but after load image and shrink we see that wrapper of image is not recomputer has extra spaced (red rectangle). How i can recomputed div to shrink to image width?',
    user_id: 3
  },
  {
    title: 'Why did this happen? I actually found it cool, and wanna know how I made it.',
    post_text: 'I have completed the "3 Column Preview Card Component" of Front End Mentor. But the thing is, I really liked the way it changes the Button is top margin smootlhy after shrinking the screen from Desktop to Mobile and vice-versa. The point is i dont really know how i did this. And everything seems to be on the line 91 of the css, which contains the "button:not(:hover)" rule. If I remove that, that does not work.My question is: Why is that???? The transition is not even coded on the Media Query...',
    user_id: 3
  },
  {
    title: 'Unwanted element shows up because of empty properties in an object',
    post_text: 'The initial state already contains an invincible string message and that makes an unwanted delete button appear initially. How can I remove this initial delete button and make sure that they only appear once the first "submit" is sent.',
    user_id: 7
  },
  {
    title: 'Trying to get button to sit slightly under the top of the page in header',
    post_text: 'Trying to get button to sit slightly under the top of the page in header',
    user_id: 6
  },
  {
    title: 'Massive delay between closing of <input type="file"> Select File Dialog and onchange event. Browser kind of freezing',
    post_text: 'One thing I noticed: If I have a network drive in my Windows Explorer Quick Access toolbar that is not reachable (because I am not connected with VPN), this massive delay problem occurs much more often (although I do select a file on my Desktop that has nothing to do with this network drive).',
    user_id: 4
  },
  {
    title: 'html force rerender div',
    post_text: 'I have flex row with max-height. wrapper of image have min-height:0; property for block height overflow; but after load image and shrink we see that wrapper of image is not recomputer has extra spaced (red rectangle). How i can recomputed div to shrink to image width?',
    user_id: 6
  },
  {
    title: 'Why did this happen? I actually found it cool, and wanna know how I made it.',
    post_text: 'I have completed the "3 Column Preview Card Component" of Front End Mentor. But the thing is, I really liked the way it changes the Button is top margin smootlhy after shrinking the screen from Desktop to Mobile and vice-versa. The point is i dont really know how i did this. And everything seems to be on the line 91 of the css, which contains the "button:not(:hover)" rule. If I remove that, that does not work.My question is: Why is that???? The transition is not even coded on the Media Query...',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;