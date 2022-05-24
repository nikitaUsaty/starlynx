import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private responsive: BreakpointObserver) {}

  isPhonePortrait = false;

  ngOnInit() {
    this.responsive
      .observe(Breakpoints.HandsetLandscape)
      .subscribe((result) => {
        if (result.matches) {
          console.log('screens matches HandsetLandscape');
        }
      });

    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;

      if (result.matches) {
        this.isPhonePortrait = true;
      }
    });
  }
}
