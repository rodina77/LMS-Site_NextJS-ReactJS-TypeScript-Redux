'use client'
import { Field } from "@/components/ui/field"
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select"
import React from "react";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { languages } from "../languages";
import Link from "next/link";

const LearningTools = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en; 
  return (
    <>
      <Typography variant="h5" style={{fontWeight:'600', margin:'10px 0px'}}>{t.learningReminders}</Typography>
      <Typography variant="h6" style={{margin:'10px 0px'}}>{t.calender}</Typography>
      <Typography variant="body2" style={{marginBottom:'10px'}}>
          {t.ToolsDesc}
      </Typography>
      <Typography variant="body2" style={{ color: "gray", fontSize: "10px" }}>
        Requires Google Calendar, Apple Calendar, or Outlook
      </Typography>
      <Button
        style={{
          backgroundColor: "#673ab7",
          color: "white",
          margin: "20px 0px",
        }}
      >
        <Link href={'/allCoursesPage'}> Schedual Learning Time</Link>
      </Button>
      <Typography variant="h5" style={{fontWeight:'600', margin:'10px 0px'}}>Push notifications</Typography>
      <Typography variant="body2" style={{margin:'10px 0px'}}>
        Don’t want to schedule time blocks? Set a learning reminder to get push
        notifications from the Udemy mobile app.
      </Typography>
      <Typography variant="h6" style={{margin:'10px 0px'}}>Text me a link to download the app</Typography>

      <Field label="Email" style={{marginBottom:'10px'}}>
      <NativeSelectRoot style={{border:'1px solid black'}}>
        <NativeSelectField items={["+1 (United State)", "+360 (timor list)", "+20 (Egypt)"]} />
      </NativeSelectRoot>
    </Field>

    <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{ width: '25ch', marginY:'10px' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">123 456 7890</InputAdornment>,
            },
          }}
        />
          <Typography variant="body2" style={{marginBottom:'20px', color:'gray'}}>
          By providing your phone number, you agree to receive a one-time automated text message with a link to get app. Standard messaging rates may apply.
          </Typography>
    </>
  );
};

export default LearningTools;
