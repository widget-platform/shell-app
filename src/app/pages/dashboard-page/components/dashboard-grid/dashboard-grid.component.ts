import {AfterViewInit, ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {GRID_OPTIONS} from "./grid-options";
import {GridsterComponent, GridsterItem} from "angular-gridster2";

@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardGridComponent implements AfterViewInit {
  @ViewChild(GridsterComponent, {static: true}) gridsterElement!: GridsterComponent;
  readonly gridsterOptions = GRID_OPTIONS;

  readonly gridsterItem: GridsterItem = {
    x: 0,
    y: 0,
    rows: 10,
    cols: 10,
    dragEnabled: true,
  }

  constructor() { }

  ngAfterViewInit() {
    this.resizeGrid();
  }

  private resizeGrid() {
    const [screenWidth, screenHeight] = [
      this.gridsterElement.el.getBoundingClientRect().width,
      this.gridsterElement.el.getBoundingClientRect().height
    ];
    const [sizeX, sizeY] = [64, 30];

    this.gridsterOptions.fixedColWidth = (screenWidth - 10 * (sizeX - 1)) / sizeX;
    this.gridsterOptions.fixedRowHeight = (screenHeight - 10 * (sizeY - 1)) / sizeY;

    this.gridsterOptions.api!.optionsChanged!();
  }
}
