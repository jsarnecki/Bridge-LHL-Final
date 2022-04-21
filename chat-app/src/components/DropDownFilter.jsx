import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownFilter(props) {
  console.log("props.languageId: ", props.languageId);


  const dropDownValue = function(userLanguageIds) {
    if (userLanguageIds.length > 1) {
      return props.languageId;
    }
    return userLanguageIds[0];
  }
  const dropDownShow = dropDownValue(props.learningLanguagesIds);

  // Using learningLanguages, map thru and add id + name to Menuitem template
	const dropDownArray = props.learningLanguages.map((language)=>{
		return (
			<MenuItem key={language.language_id} value={language.language_id}>{language.language_name}</MenuItem>
		)
	});

  if (dropDownArray.length !== 1) {
    dropDownArray.unshift(<MenuItem value={0}>All</MenuItem>)
  }


  return (
    <Box sx={{ maxWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={dropDownShow}
        label="Language"
        onChange={props.handleChange}
      >
        {dropDownArray}
      </Select>
    </FormControl>
  </Box>
  )
};