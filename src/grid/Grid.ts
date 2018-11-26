import Cell from "./Cell";
import GridOptions from "./GridOptions";
import GridSnapshot from "./GridSnapshot";

export default class Grid<T> {
  private _options: GridOptions;
  private _cells: ReadonlyArray<ReadonlyArray<Cell<T>>>;

  constructor(options: GridOptions) {
    this._options = options;
    this._cells = [];

    for (let x: number = 0; x < options.width; x++) {
      let column: ReadonlyArray<Cell<T>> = [];

      for (let y: number = 0; y < options.height; y++) {
        column = column.concat(new Cell<T>(this, x, y));
      }

      this._cells = this._cells.concat(column);
    }
  }

  public getCell(x: number, y: number): Cell<T> {
    return null;
  }

  public getSnapshot(
    x: number,
    y: number,
    width: number,
    height: number
  ): GridSnapshot<T> {
    return new GridSnapshot<T>(this, []);
  }

  public get cells(): ReadonlyArray<ReadonlyArray<Cell<T>>> {
    return this._cells;
  }

  public get size(): number {
    return this._options.width * this._options.height;
  }

  public get options(): GridOptions {
    return this._options;
  }
}