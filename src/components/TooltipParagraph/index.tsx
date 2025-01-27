import { Tooltip } from 'antd';
import React from 'react';

type TooltipParagraphProps = {
  color?: string;
  textAlign?: string | any;
  className?: string;
  width?: number;
  placement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom';
  children?: any;
  title?: string | any;
};

const TooltipParagraph = ({
  color,
  textAlign,
  className,
  width,
  placement,
  children,
  title,
}: TooltipParagraphProps) => {
  return (
    <Tooltip placement={placement} title={title ? title : children}>
      <p
        style={{
          width: width ? width : '100%',
          color: color,
          textAlign: textAlign ? textAlign : '',
          margin: 0,
          display: 'webkit-box',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
        className={className}
      >
        <>{children}</>
      </p>
    </Tooltip>
  );
};

export default TooltipParagraph;
