define(['knockout', 'viewmodels/shell'], function(ko, shell) {
    var router = shell.router;
    var comps = {
        'a14923a': 'Volution',
        'b3847jb': 'WaterFall',
        't48h4mk': 'projekt202',
        'srk45jt': 'Veolia'
    };
    var vm = function() {};
    var fn = vm.prototype;
    fn.activate = function(companyId) {
        this.comp = comps[companyId];
        if (!this.comp) {
            router.navigate('');
        }
        this.vcard = {
            Name: 'Sam Armstrong',
            Street: '1525 Main St',
            City: 'Houston',
            State: 'Texas',
            Email: 'sam.armstrong@bitcadia.com?subject=Interview%20Request',
            Linkedin: 'https://www.linkedin.com/pub/samuel-armstrong/18/a39/b42',
            Stackoverflow: 'http://stackoverflow.com/users/364282/drsammyd',
            Github: 'https://github.com/DrSammyD',
            Zip: 77002
        };
    };
    return vm;
});