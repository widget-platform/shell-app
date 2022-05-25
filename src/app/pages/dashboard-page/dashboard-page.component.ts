import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {

  constructor() { }
}
