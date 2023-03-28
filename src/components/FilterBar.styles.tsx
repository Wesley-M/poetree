import {alpha, Button, InputBase, styled} from "@mui/material";

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 0,
  width: '100%',
  '& .MuiSvgIcon-root': {
    fill: theme.palette.primary.main
  },
  '& .MuiInputBase-input': {
    color: theme.palette.text.primary
  }
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  borderRadius: theme.shape.borderRadius,
  border: `2px solid ${alpha(theme.palette.text.primary, 0.1)}`,
  '&.Mui-focused': {
    border: `2px solid  ${theme.palette.primary.main}`,
  },
  '&.MuiInputBase-root': {
    width: '100%',
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: 'inherit',
  },
}));

export const InitialLetterButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) => ({
  color: selected ? theme.palette.primary.contrastText : alpha(theme.palette.text.primary, 0.5),
  border: selected ? theme.palette.primary.main : `2px solid ${alpha(theme.palette.text.primary, 0.2)}`,
  borderRadius: '0.2em',
  width: '1.5em',
  height: '1.5em',
  minWidth: '32px',
  minHeight: '32px',
  textTransform: 'uppercase',
  backgroundColor: selected ? theme.palette.primary.main : 'transparent',
  "&:hover": {
    backgroundColor: selected ? theme.palette.primary.main : alpha(theme.palette.primary.main, 0.1),
    border: `2px solid ${alpha(theme.palette.primary.main, 0.5)}`,
  },
}));
