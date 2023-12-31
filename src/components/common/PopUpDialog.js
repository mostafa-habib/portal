import React from 'react'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

const PopUpDialog =  styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default PopUpDialog