define(['knockout', 'locale/current-locale', 'jquery', 'moment', 'datetimepicker' ,'maskBinding'], function (ko, locale, $, moment) {
    ko.bindingHandlers.datetimepicker = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            //initialize datetimepicker with some optional options
            $el= $(element);

            //when a user changes the date, update the view model
            if(!allBindingsAccessor.get('mask'))
                $el.on("change", function (event) {
                    var value = allBindingsAccessor('value');
                    if (ko.isObservable(value)) {
                        value($el.data('xdsoft_datetimepicker').data('xdsoft_datetime').getCurrentTime());
                    }
                });
        },
        update: function (element, valueAccessor, allBindingsAccessor) {
            $el= $(element);
            var options = allBindingsAccessor.get('datetimepicker');
            locale();
            options.value = ko.utils.unwrapObservable(allBindingsAccessor.get('value'))||undefined;
            options.minDate = ko.utils.unwrapObservable(options.startDate)||undefined;
            options.maxDate = ko.utils.unwrapObservable(options.endDate)||undefined;
            options.format = ko.utils.unwrapObservable(options.format)||undefined;
            $el.datetimepicker('reset');
            $el.datetimepicker(ko.toJS(options));
        },
        after:['mask']
    };
    ko.utils.arrayForEach(
        ['datetimepicker'],
        function(item) {
            ko.bindingHandlers.mask.register(item);
        });
    ko.bindingHandlers.mask.replace.push({
        test: 'datetimepicker',
        valToUse: function(bindingName, val) {
            return val;
        },
        morph: function(bindingName, val, interceptor, allBindingsAccessor) {
            bindings = {};
            val.format=ko.computed(function(){return allBindingsAccessor.get('maskObs').currentMask().momentFormat });
            bindings[bindingName]=val;
            return bindings;
        }
    });
});