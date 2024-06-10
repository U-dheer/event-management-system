import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
})
export class ContainerComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    this.videoPlayer.nativeElement.muted = true;
    this.videoPlayer.nativeElement.play();
  }
}
