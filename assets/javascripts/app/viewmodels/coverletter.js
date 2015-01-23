define(['knockout','viewmodels/shell'],function(ko,shell){
    var router = shell.router;
    var comps={
        'a14923a':'Volution',
        'b3847jb':'WaterFall'
    };
    var vm = function(){};
    var fn = vm.prototype;
    fn.activate= function(companyId){
        this.comp=comps[companyId];
        if(!this.comp){
            router.navigate('');
        }
    };
    return vm;
});