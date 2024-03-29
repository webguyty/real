import React from 'react'

import { PrimaryButton } from "components/misc/Buttons.js";
import { DualLanguageStr } from './DualLanguageStr';
import { toggleLanguage } from 'helpers/language';
import { useSearchParams } from "react-router-dom";
import LANGUAGE from 'constants/language';


// Toggle Query params
export const TogglerBtn = () => {
  const [, setSearchParams] = useSearchParams({});


  const setQueryParamLanguage = (e) => {
    e === LANGUAGE.ENGLISH_ABBR ?
    setSearchParams({})
    : setSearchParams({[LANGUAGE.QUERY_PARAM]:e})
  }

  return (
      <PrimaryButton
        onClick={() => toggleLanguage(setQueryParamLanguage)}
      >
        {/* English Spanish reversed for reading in opposite language */}
        <DualLanguageStr 
          english="Ve en Espanol"
          spanish="View in English"
        />
      </PrimaryButton>
  )
}