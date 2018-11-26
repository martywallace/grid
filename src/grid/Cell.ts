import Grid from "./Grid";

export default class Cell<T> {
  private _grid: Grid<T>;
  private _x: number;
  private _y: number;
  private _content: T;

  constructor(grid: Grid<T>, x: number, y: number) {
    this._grid = grid;
    this._x = x;
    this._y = y;
  }

  /**
   * Whether or not the target cell is considered equal to this cell, which is
   * true in cases where the position and associated grid are shared.
   * 
   * @param cell The target cell.
   */
  public equals(cell: Cell<T>): boolean {
    return this._grid === cell.grid
      && this._x === cell.x
      && this._y === cell.y;
  }

  /**
   * Select a cell relative to this cell.
   * 
   * @param x The selection offset along the X axis, e.g. -1 would select a cell
   * to the left of the current cell.
   * @param y The selection offset along the Y axis, e.g. 1 would select a cell
   * below the current cell.
   */
  public getRelative(x: number, y: number): Cell<T> {
    return this._grid.getCell(this._x + x, this._y + y);
  }

  /**
   * Measure the distance between this cell and a target cell.
   * 
   * @param cell The target cell.
   */
  public getDistanceToCell(cell: Cell<T>): number {
    return Math.sqrt(cell.x * cell.x + cell.y * cell.y);
  }

  /**
   * Measure the angle between this cell and a target cell and return the value
   * in radians.
   * 
   * @param cell The target cell.
   */
  public getRadiansToCell(cell: Cell<T>): number {
    return Math.atan2(
      cell.y - this._y,
      cell.x - this._x
    );
  }

  /**
   * Measure the angle between this cell and a target cell and return the value
   * in degrees.
   * 
   * @param cell The target cell.
   */
  public getDegreesToCell(cell: Cell<T>): number {
    return this.getRadiansToCell(cell) * Math.PI * 2;
  }

  /**
   * The grid that this cell belongs to.
   */
  public get grid(): Grid<T> {
    return this._grid;
  }

  /**
   * The X position of this cell.
   */
  public get x(): number {
    return this._x;
  }

  /**
   * The Y position of this cell.
   */
  public get y(): number {
    return this._y;
  }

  public get content(): T {
    return this._content;
  }

  public set content(value: T) {
    this._content = value;
  }
}