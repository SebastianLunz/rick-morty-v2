import React from 'react';
import {Pagination, PaginationItem} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";


const PaginationLink = ({numberOfPages, repository}) => {

  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: 'transparent',
      color: '#fff',
    },
  }));

  const classes = useStyles();

  return (
    <Pagination
      shape="rounded"
      size="large"
      variant="outlined"
      color="primary"
      showFirstButton
      showLastButton
      count={numberOfPages}
      renderItem={(item) => (
        <PaginationItem
          className={`${classes.root}`}
          component={Link}
          to={`${repository}${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}

export default PaginationLink;