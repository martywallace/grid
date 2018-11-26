export default interface GridOptions {

  /**
   * The width of the grid, i.e. how many columns it has.
   */
  readonly width: number;

  /**
   * The height of the grid, i.e. how many rows it has.
   */
  readonly height: number;

  /**
   * Whether or not cell selection behaviour should "wrap" around the grid. For
   * example, whether selecting the cell to the right of a cell at the end of a
   * row should return the first cell in the row.
   */
  readonly wrap: boolean;

}