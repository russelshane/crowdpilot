import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  // Search modal auto-complete
  isSearchActive: boolean = false;
}
