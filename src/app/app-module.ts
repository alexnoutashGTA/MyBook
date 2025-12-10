
X [ERROR] NG8001: 'router-outlet' is not a known element:
1. If 'router-outlet' is an Angular component, then verify that it is part of this module.
2. If 'router-outlet' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. [plugin angular-compiler]

    src/app/app.html:8:4:
      8 │     <router-outlet />
        ╵     ~~~~~~~~~~~~~~~~~

  Error occurs in the template of component App.

    src/app/app.ts:8:15:
      8 │   templateUrl: './app.html',
        ╵                ~~~~~~~~~~~~


X [ERROR] TS2307: Cannot find module './messages/messages.component' or 
its corresponding type declarations. [plugin angular-compiler]

    src/app/messages/messages.ts:2:34:
      2 │ import { MessagesComponent } from './messages/messages.component';
        ╵                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


X [ERROR] Could not resolve "./messages/messages.component"

    src/app/app-module.ts:10:34:
      10 │ ...omponent } from './messages/messages.component'; // Ensure this...
         ╵                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~