angular.module('flapperNews')
.controller('PostsCtrl', [
  '$scope',
  'posts',
  'post',
  function($scope, posts, post){
    $scope.post = post;

    $scope.addComment = function(){
      if($scope.body === '') { return; }
      posts.addComment(post.id, {
        body: $scope.body,
        author: 'user',
        upvotes: 0
      }).success(function(data) {
        post.comments.push(data[1]);
      });
      $scope.body = '';
    };

    $scope.incrementUpvotes = function(comment) {
      posts.upvoteComment(post, comment);
    };
  }
]);
