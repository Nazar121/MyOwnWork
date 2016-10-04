var data = {
    user:[
        {
            name:'Nazar',
            surname:'Burban',
            number:'0634125667'
        },
        {
            name:'Taras',
            surname:'Beida',
            number:'0635698224'
        },
        {
            name:'Petya',
            surname:'Zhuk',
            number:'0631111111'
        },
        {
            name:'Kolya',
            surname:'Haiter',
            number:'0932222222'
        },
        {
            name:'Dinis',
            surname:'Habib',
            number:'0635987361'
        },
        {
            name:'Arsen',
            surname:'Beida',
            number:'0939612875'
        },
        {
            name:'Roman',
            surname:'Heck',
            number:'0635698224'
        }
    ]
}

angular.module('myApp',[])
.controller('Ctrl1',function(){
    this.data = data;
    
    this.push = function(){
        this.data.user.push({
            name: this.FirstName,
            surname: this.LastName,
            number: this.Number
        });
        console.log(data.user);
        $('#myModal').modal('hide');
        
    }
    
//    for (var i=0; i<=this.data.user.length; i++){
//        
//    }
    
    this.remove = function (i) {
        var index = this.data.user.indexOf(i);
        this.data.user.splice(index, 1);
        console.log(data.user);
    }
    
    
    this.edit = function (i) {
        $(".editModal").show();
        $('.editPopap').show(500);
        this.redagFirstName = i.name;
        this.redagLastName = i.surname;
        this.redagNumber = i.number;
        var indexEdit = this.data.user.indexOf(i);
        this.save = function () {
            this.data.user.splice(indexEdit, 1, {
                name: this.redagFirstName,
                surname: this.redagLastName,
                number: this.redagNumber
            });
            console.log(this.data.user);
            this.redagFirstName = '';
            this.redagLastName = '';
            this.redagNumber = '';
            $(".editModal").hide();
            $(".editPopap").hide();
        }
        this.exit = function(){
            $('.editPopap__exit').parent().hide();
            $(".editModal").hide();
        }
    }
    
    this.sortColumn = 'name';
    this.reverseSort = false;
    
    this.sortData = function(column){
        this.reverseSort = (this.sortColumn == column) ? !this.reverseSort : false;
        this.sortColumn = column;
    }
    
    this.getSortClass = function(column){
        if (this.sortColumn == column){
            return this.reverseSort ? 'arrow-down' : 'arrow-up';
        }
        return '';
    }
});