import {RouterModule, Routes} from '@angular/router';

import {NewQuoteComponent} from './new-quote/new-quote.component';
import {QuotesComponent} from './quotes/quotes.component';
import {ModuleWithProviders} from '@angular/core';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {LogoutComponent} from './logout/logout.component';

const APP_ROUTES: Routes = [
    {path: '', component: QuotesComponent},
    {path: 'new-quote', component: NewQuoteComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'logout', component: LogoutComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);