import { ReactElement } from 'react';
import { Pagination } from '@mui/material';
import { gridPageCountSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';

const CustomPagination = (): ReactElement => {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={apiRef.current.state.pagination.paginationModel.page + 1}
      onChange={(event, value) =>
        apiRef.current.setPage(value - 1)
      }
    />
  );
};

export default CustomPagination;
