requirejs.config({
    baseUrl:'/javascripts/app',
    paths: {
        'bindings':'plugs/bindings',
        'datetimepicker': '../vendor/datetimepicker/jquery.moment.datetimepicker',
        'durandal':'../vendor/durandal',
        'es5-shim': '../vendor/es5-shim/es5-shim',
        'es6-shim': '../vendor/es6-shim/es6-shim',
        'fastclick': '../vendor/fastclick/fastclick',
        'i18next':'../vendor/i18next/i18next.amd.withJQuery',
        'injectBinding':'plugs/ko/injectBinding',
        'jqplugs':'plugs/frameworkDeps/jqplugs',
        'jquery': '../vendor/jquery/jquery',
        'jquery.inputmask':'../vendor/jquery.inputmask',
        'jquery.mousewheel': '../vendor/jquery-mousewheel/jquery.mousewheel',
        'knockout': '../vendor/knockout/knockout.debug',
        'knockout-deferred-updates': '../vendor/knockout-deferred-updates/knockout-deferred-updates',
        'knockout-es5':'../vendor/knockout-es5/knockout-es5',
        'ko-go':'plugs/ko/ko-go',
        'ko-hotkeys':'../vendor/Knockout.Hotkeys/knockout.hotkeys',
        'ko-punches': '../vendor/knockout.punches/knockout.punches',
        'kodash':'../vendor/kodash/kodash',
        'koplugs': 'plugs/frameworkDeps/koplugs',
        'lodash':'../vendor/lodash/lodash',
        'maskBinding':'plugs/bindings/maskBinding',
        'htmlBinding':'plugs/bindings/htmlBinding',
        'foundationBinding':'plugs/bindings/foundationBinding',
        'datetimepickerBinding':'plugs/bindings/datetimepickerBinding',
        'onceIf':'plugs/bindings/onceIf',
        'selectizeBinding':'plugs/bindings/selectizeBinding',
        'microplugin': '../vendor/microplugin/microplugin',
        'moment':'../vendor/moment/moment',
        'moment-timezone':'../vendor/moment-timezone/moment-timezone-with-data-2010-2020',
        'numeral':'../vendor/numeral/numeral',
        'plugins' : '../vendor/durandal/plugins',
        'plugs':'../app/plugs',
        'q': '../vendor/q/q',
        'selectize': '../vendor/selectize/selectize',
        'setImmediate': '../vendor/setImmediate/setImmediate',
        'sifter': '../vendor/sifter/sifter',
        'text': '../vendor/requirejs-texport/text',
        'toastr': '../vendor/toastr/toastr',
        'trackRecursive':'plugs/ko/trackRecursive',
        'transitions':'../vendor/durandal/transitions',
        'transitions/entrance':'plugs/durandal/entrance',
        'transitions/entranceSlide':'plugs/durandal/entranceSlide',
        'velocity': '../vendor/velocity/velocity',
        'velocity-ui': '../vendor/velocity/velocity.ui',
        'virtual-dom': 'plugs/virtual-dom/virtual-dom',
        'vdom-virtualize': 'plugs/virtual-dom/vdom-virtualize',
        'zurb' : '../vendor/foundation'
    },
    shim: {
        'jquery':{exports:['jQuery','$']},
        'koplugs': 'knockout',
        'jqplugs':{deps:['jquery']},
        'datetimepicker':{deps:['jquery']},
        'velocity':{deps:['jquery']},
        'velocity-ui':'velocity',
        'fastclick':{exports:['FastClick']},
        'zurb/foundation':{exports:'Foundation',deps:['jquery','fastclick']},
        'zurb/foundation.abide':'zurb/foundation',
        'zurb/foundation.accordion':'zurb/foundation',
        'zurb/foundation.alert':'zurb/foundation',
        'zurb/foundation.clearing':'zurb/foundation',
        'zurb/foundation.dropdown':'zurb/foundation',
        'zurb/foundation.equalizer':'zurb/foundation',
        'zurb/foundation.interchange':'zurb/foundation',
        'zurb/foundation.joyride':'zurb/foundation',
        'zurb/foundation.magellan':'zurb/foundation',
        'zurb/foundation.offcanvas':'zurb/foundation',
        'zurb/foundation.orbit':'zurb/foundation',
        'zurb/foundation.reveal':'zurb/foundation',
        'zurb/foundation.tab':'zurb/foundation',
        'zurb/foundation.tooltip':'zurb/foundation',
        'zurb/foundation.topbar':'zurb/foundation'
    },
    map:{
        '*':{
            'underscore':'lodash'
        }
    }
});