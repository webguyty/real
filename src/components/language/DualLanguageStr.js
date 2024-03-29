import React from 'react'
import { useGetLanguageQueryParam } from 'helpers/languageHooks'
import LANGUAGE from 'constants/language'

export const DualLanguageStr = ({ english, spanish}) => {

  const val = useGetLanguageQueryParam()

  return val === LANGUAGE.SPANISH_ABBR ?
    <>{spanish}</> :
    <>{english}</>
}