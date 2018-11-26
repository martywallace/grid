import Grid from "./Grid";
import Cell from "./Cell";

export default class GridSnapshot<T> {
  private _grid: Grid<T>;
  private _cells: ReadonlyArray<ReadonlyArray<Cell<T>>>;

  constructor(
    grid: Grid<T>,
    cells: ReadonlyArray<ReadonlyArray<Cell<T>>>
  ) {
    this._grid = grid;
    this._cells = cells;
  }

  public get grid(): Grid<T> {
    return this._grid;
  }

  public get cells(): ReadonlyArray<ReadonlyArray<Cell<T>>> {
    return this._cells;
  }
}