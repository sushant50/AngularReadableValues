# AngularReadableValues
Clone the Javascript file and include it in your html page. Inject AngularReadableValues in your app.js and use it in your HTML as a filter. 

Example-
~~~~
     var app = angular.module('priApp',[ 'ngRoute', 'ngResource', 'ui.bootstrap','toastr',
     'AngularReadableValues','appcontroller',
     'TagCtrl','xeditable','directives']);
    
    <div class="row ipAddressdetails">
    <div class="col-lg-12 col-md-12 text-center">
    <span class="glyphicon glyphicon-time">
    <span class="glyphicon glyphicon-random">
    </span>{{init.freeswitch_status[port0].sessions_since_startup | ConvertToK}}
    </div>
    </div>
    
~~~~
