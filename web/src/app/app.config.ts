import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  LucideAngularModule,
  Menu,
  Search,
  CalendarSearch,
  UserRound,
  Mail,
  SquareAsterisk,
  MoveRight,
  LockKeyhole,
  Plus,
  SquareCheck,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        Menu,
        Search,
        CalendarSearch,
        UserRound,
        Mail,
        SquareAsterisk,
        MoveRight,
        LockKeyhole,
        Plus,
        SquareCheck,
      })
    ),
  ],
};
