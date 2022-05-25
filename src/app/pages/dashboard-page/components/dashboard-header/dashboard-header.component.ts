import {ChangeDetectionStrategy, Component, Injector, OnInit} from '@angular/core';
import {TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {DashboardPanelComponent} from "../dashboard-panel/dashboard-panel.component";

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeaderComponent {
  isMenu = false;
  readonly menuList = [
    {
      title: 'Добавить виджет',
      onClick: () => {
        this.isMenu = false;
        this.dialogService.open(new PolymorpheusComponent(DashboardPanelComponent, this.injector)).subscribe();
      }
    },
    {
      title: 'Выйти',
      onClick: () => this.isMenu = false
    },
  ] as const;

  constructor(
    private readonly dialogService: TuiDialogService,
    private readonly injector: Injector,
  ) { }

  openWidgetPanel() {

  }
}
