import React, { useState, Dispatch, SetStateAction } from 'react';
import * as UI from './style';
import ButtonIcon from '../../../atoms/ButtonIcon';
import Close from '../../../../assets/svg/Close';

export interface Props {
  title: string;
  subTitle?: string;
  primary?: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const PopupHeader = ({ title, subTitle, primary, onClose }: Props) => {
  console.log(title);
  return (
    <UI.Container>
      <UI.Title primary={primary!}>{title}</UI.Title>
      {subTitle && <UI.SubTitle>{subTitle}</UI.SubTitle>}
      <UI.Close>
        <ButtonIcon onClick={onClose}>
          <Close />
        </ButtonIcon>
      </UI.Close>
    </UI.Container>
  );
};

PopupHeader.defaultProps = {
  subTitle: null,
  primary: false,
};

export default PopupHeader;
