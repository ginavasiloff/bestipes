import * as React from 'react';
import { useHistory } from 'react-router';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export const AddRecipeFab = ({
  className,
}: {
  className: string | undefined;
}) => {
  let history = useHistory();

  const handleClickAdd = () => history.push(`/recipe/new`);

  return (
    <Fab color='primary' onClick={() => handleClickAdd()} className={className}>
      <AddIcon />
    </Fab>
  );
};
