type Column<T> = {
  heading: string;
  numeric?: boolean;
  defaultSort?: Direction;
  key?: string;
  component?: React.ReactNode | React.ComponentType;
  sortable?: boolean;
  /**
   * @deprecated Use `key` to provide column identifier and `component` to provide a custom cell renderer.
   */
  accessor?: React.ReactNode | React.ComponentType | string;
};

type Direction = 'asc' | 'desc';

type OnSortClickOptions<T> = {
  column: Column<T>;
  direction: Direction;
};

type onSortClick<T> = (
  event: React.MouseEvent<HTMLElement>,
  options: OnSortClickOptions<T>
) => void;

type onRowsPerPageChange = (event: any) => void;

type BulkSelection = {
  onRowSelectClick: (event: React.MouseEvent<HTMLInputElement>, value: any) => void;
  onBulkSelectClick: React.MouseEventHandler;
  isRowSelected: (item: any) => boolean;
};

type SelectAllOrNoneEnabled = {
  onSelectAllClick: React.MouseEventHandler;
  onSelectNoneClick: React.MouseEventHandler;
};

type SelectAllOrNoneDisabled = {
  onSelectAllClick?: never;
  onSelectNoneClick?: never;
};

type ActionsProps = {
  actions: React.ReactNode;
  title: string;
};

type OptionalTitle = {
  actions?: never;
  title?: string;
};

type TableActions = ActionsProps | OptionalTitle;

type Pagination = {
  currentPage: number;
  totalRows: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  onPrevPageClick: React.MouseEventHandler;
  onNextPageClick: React.MouseEventHandler;
  onRowsPerPageChange: onRowsPerPageChange;
};

type Selection = BulkSelection & (SelectAllOrNoneEnabled | SelectAllOrNoneDisabled);

type SelectionWithoutPagination = {
  pagination?: never;
  selection: BulkSelection & SelectAllOrNoneDisabled;
};

type PaginationWithoutSelection = {
  pagination: Pagination;
  selection?: never;
};

type PaginationAndSelection = {
  pagination: Pagination;
  selection: Selection;
};

type PaginationAndSelectionDisabled = {
  pagination?: never;
  selection?: never;
};

type PaginationSelectionCombination =
  | SelectionWithoutPagination
  | PaginationWithoutSelection
  | PaginationAndSelection
  | PaginationAndSelectionDisabled;

type TableBase<T = unknown> = {
  subtitle?: string;
  columns: Column<T>[];
  items: any[];
  onSortClick?: onSortClick<T>;
};

export type TableProps<T = unknown> = TableBase<T> & TableActions & PaginationSelectionCombination;

export type Sortable<T> = {
  direction: Direction;
  isSorted: (column: Column<T>) => boolean;
  onClick: (
    event: React.MouseEvent<HTMLElement>,
    column: Column<T>,
    callback: (event: React.MouseEvent<HTMLElement>, options: OnSortClickOptions<T>) => void
  ) => void;
};

export type SortingState<T> = {
  direction: Direction;
  column?: Column<T>;
};
