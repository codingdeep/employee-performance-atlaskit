import React from 'react';
import { AtlassianValues } from '~codegen/types';
import ValueDFTC from '~src/assets/ValueDFTC.svg';
import ValueBTCYS from '~src/assets/ValueBTCYS.svg';
import ValueOCNB from '~src/assets/ValueOCNB.svg';
import ValuePaat from '~src/assets/ValuePaat.svg';
import ValueBWHB from '~src/assets/ValueBWHB.svg';

const ValueToIconMap = {
  [AtlassianValues.BeTheChangeYouSeek]: ValueBTCYS,
  [AtlassianValues.BuildWithHeartAndBalance]: ValueBWHB,
  [AtlassianValues.DontFuckTheCustomer]: ValueDFTC,
  [AtlassianValues.OpenCompanyNoBullshit]: ValueOCNB,
  [AtlassianValues.PlayAsATeam]: ValuePaat,
};

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  value: AtlassianValues;
}

const AtlassianValueIcon = ({ value, ...rest }: Props) => {
  const ValueIcon = ValueToIconMap[value];
  return <img width={16} height={16} src={ValueIcon} {...rest} alt="" />;
};

export default AtlassianValueIcon;
