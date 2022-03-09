const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Try this ... Nunc rhoncus dui vel sem.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Try this ... Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Try this ... Aliquam erat volutpat. In congue.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Try this ... Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Try this ... In hac habitasse platea dictumst.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Try this ... Vivamus vestibulum sagittis sapien.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Try this ... Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Try this ... Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Try this ... Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Try this ... Morbi a ipsum.',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'Try this ... Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Try this ... Donec ut mauris eget massa tempor convallis.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Try this ... Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text: 'Try this ... Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'Try this ... Quisque porta volutpat erat.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Try this ... Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text: 'Try this ... Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'Try this ... Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text: 'Try this ... Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text: 'Try this ... Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'Try this ... Curabitur convallis.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Try this ... Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Try this ... Morbi non quam nec dui luctus rutrum.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'Try this ... Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text: 'Try this ... Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Try this ... Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Try this ... Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Try this ... Nam tristique tortor eu pede.',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'Try this ... Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'Try this ... Proin eu mi. Nulla ac enim.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Try this ... Sed ante. Vivamus tortor.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Try this ... Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Try this ... Donec quis orci eget orci vehicula condimentum.',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'Try this ... Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Try this ... Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'Try this ... Maecenas ut massa quis augue luctus tincidunt.',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'Try this ... Cras in purus eu magna vulputate luctus.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'Try this ... Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Try this ... Proin at turpis a pede posuere nonummy.',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'Try this ... Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text: 'Try this ... Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Try this ... Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'Try this ... Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Try this ... Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text: 'Try this ... Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Try this ... Integer ac leo. Pellentesque ultrices mattis odio.',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'Try this ... Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Try this ... Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'Try this ... Proin risus. Praesent lectus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Try this ... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;