///
/// Copyright 2015 Red Hat, Inc. and/or its affiliates
/// and other contributors as indicated by the @author tags.
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///    http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

/// <reference path="../../includes.ts"/>
/// <reference path="inventoryGlobals.ts"/>
module Inventory {

    export var _module = angular.module(Inventory.pluginName, ['ngResource','hawkular.services','hawkular.charts']);

    var tab = undefined;

    _module.config(['$locationProvider', '$routeProvider', 'HawtioNavBuilderProvider', 'HawkularInventoryProvider', ($locationProvider, $routeProvider:ng.route.IRouteProvider, builder:HawtioMainNav.BuilderFactory, HawkularInventoryProvider) => {
        tab = builder.create()
            .id(Inventory.pluginName)
            .title(() => "Inventory")
            .href(() => "/inventory")
            .subPath("Inventory List", "Inventory", builder.join(Inventory.templatePath, 'inventory.html'))
            .build();
        builder.configureRouting($routeProvider, tab);
        $locationProvider.html5Mode(true);
    }]);

    _module.run(['HawtioNav', (HawtioNav:HawtioMainNav.Registry) => {
        HawtioNav.add(tab);
    }]);


    hawtioPluginLoader.addModule(Inventory.pluginName);
}
