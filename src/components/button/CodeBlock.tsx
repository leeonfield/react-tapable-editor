import React, { ComponentType } from 'react';
import withFillColor from './utils/withFillColor';
import withAction from './utils/withAction';
import { ButtonProps } from '../../types';

const CodeBlock: ComponentType<ButtonProps> = ({ fill }) => {
  return (
    <svg width="16" height="16" fill={fill} viewBox="0 0 1024 1024">
      <path
        d="M341.333333 128a85.333333 85.333333 0 0 0-85.333333 85.333333v170.666667a85.333333 85.333333 0 0 1-85.333333 85.333333H128v85.333334h42.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v170.666667a85.333333 85.333333 0 0 0 85.333333 85.333333h85.333334v-85.333333H341.333333v-213.333334a85.333333 85.333333 0 0 0-85.333333-85.333333 85.333333 85.333333 0 0 0 85.333333-85.333333V213.333333h85.333334V128m256 0a85.333333 85.333333 0 0 1 85.333333 85.333333v170.666667a85.333333 85.333333 0 0 0 85.333333 85.333333h42.666667v85.333334h-42.666667a85.333333 85.333333 0 0 0-85.333333 85.333333v170.666667a85.333333 85.333333 0 0 1-85.333333 85.333333h-85.333334v-85.333333h85.333334v-213.333334a85.333333 85.333333 0 0 1 85.333333-85.333333 85.333333 85.333333 0 0 1-85.333333-85.333333V213.333333h-85.333334V128h85.333334z"
        fill=""
        p-id="7920"
      />
    </svg>
  );
};

export default withFillColor(withAction(CodeBlock));