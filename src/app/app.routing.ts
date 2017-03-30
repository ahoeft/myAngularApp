import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home.component';
import { MonsterComponent } from './components/monstercalc.component';
import { AboutComponent } from './components/about.component';
import { TreasureComponent } from './components/treasure.component';
import { MapBuilderComponent } from './components/mapbuilder.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'monster',
        component: MonsterComponent
    },
    {
        path: 'treasure',
        component: TreasureComponent
    },
    {
        path: 'mapbuilder',
        component: MapBuilderComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);