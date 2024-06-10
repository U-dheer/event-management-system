import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../shared/navigation-bar/navigation-bar.component';
import { ContainerComponent } from './ui/container/container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationBarComponent, ContainerComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
