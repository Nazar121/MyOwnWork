angular.module('App',[])
.directive('data',function(){
    var footballClubs = 'Football clubs';
    var arr = [
        {
            count: '1',
            clube: 'Real Madrid',
            sity: 'Madrid',
            country: 'Spain',
            history: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat architecto ab exercitationem mollitiaRepellat fugiat architecto ab exercitationem mollitiaRepellat fugiat architecto ab exercitationem mollitia, tempora possimus nihil inventore ut cum.'
        },
        {
            count: '2',
            clube: 'FC Barcelona',
            sity: 'Barcelona',
            country: 'Spain',
            history: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat architecto ab exercitationem mollitia, tempora possimus nihil inventore ut cum.'
        },
        {
            count: '3',
            clube: 'FC Bayern München',
            sity: 'München',
            country: 'Germania',
            history: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat architecto ab exercitationem mollitia, tempora possimus nihil inventore ut cum.tationem mollitia, tempora possimus nihil inventore ut cum.'
        }
    ];
    return {
        templateUrl:'templates/articles.html',
        restrict: 'E',
        link: function(scope,element,attrs){
            scope.footballClubs = footballClubs;
            scope.arr = arr;
        }
    }
});