import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { languages } from '../languages';

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en;

  return (
    <Box sx={{ width: '100%' , marginTop:'20px' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpen(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <p style={{fontWeight: 'bold'}}>{t.schedual}</p>
          <br />
          {t.learningDesc}
        </Alert>
      </Collapse>
    </Box>
  );
}
