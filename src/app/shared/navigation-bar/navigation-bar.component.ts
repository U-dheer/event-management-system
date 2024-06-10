import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionImage } from '@ng-icons/ionicons';
@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ ionImage })],
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent {}
