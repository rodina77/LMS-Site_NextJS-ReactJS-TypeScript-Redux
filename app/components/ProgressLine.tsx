import {
  ProgressBar,
  ProgressLabel,
  ProgressRoot,
} from "@/components/ui/progress";

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { languages } from '../languages';

const ProgressLine = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en; 
  return (
    <ProgressRoot maxW="990px">
      <ProgressLabel style={{color:'black', marginTop:'20px'}} info="Uploading document to the server" mb="2">
        {t.min}
      </ProgressLabel>
      <ProgressBar 
        color="teal" 
        style={{ direction: 'rtl', backgroundColor: '#b39ddb' }} 
      />
    </ProgressRoot>
  );
}

export default ProgressLine;
