import {DisplayGrid, GridsterConfig, GridType} from "angular-gridster2";

export const GRID_OPTIONS: GridsterConfig = {
  gridType: GridType.Fixed,
  displayGrid: DisplayGrid.None,
  fixedColWidth: 15,
  fixedRowHeight: 15,
  draggable: {
    enabled: true,
  }
}
