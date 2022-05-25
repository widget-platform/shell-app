import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {TuiDialogContext} from "@taiga-ui/core";

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPanelComponent {

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext,
  ) { }

  ngOnInit(): void {
  }

  widgetDragHandler() {
    this.context.completeWith();
  }
}
