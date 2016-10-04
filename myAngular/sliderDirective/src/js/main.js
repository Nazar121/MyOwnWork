angular.module('App',[])
.directive('img',function(){
    var arr = ['src/img/img0.png','src/img/img1.png','src/img/img2.png','src/img/img3.png','src/img/img4.jpg'];
    return {
        link: function(scope,element,attrs){
            scope.arr = arr;
            var i = 0;
            scope.i = i;
            element.one('click',function(){
                $('.container').append('<img class="img" src="'+scope.arr[i]+'">');
                $('.container').append('<input type="button" class="btn" value="Next">');
            });
            
            element.next('.btn').on('click',function(){
                if (scope.i < arr.length-1){
                    scope.i++;
                    $(".img").attr("src",scope.arr[scope.i]);
                }else {
                    scope.i = 0;
                    $(".img").attr("src",scope.arr[scope.i]);
                }
            });
        }
    }
});
