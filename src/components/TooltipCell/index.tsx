import { TooltipParagraph } from '@/components';
import dayjs from 'dayjs';
import React from 'react';

type TooltipCellProps = {
  title?: string | any;
  content?: string | any;
  isDate?: boolean;
  className?: string;
  formatDate?: string;
};

const TooltipCell: React.FC<TooltipCellProps> = ({ title, content, isDate, className, formatDate }) => {
  const displayContent = isDate && content ? dayjs(new Date(content), formatDate ?? 'dd/MM/yyyy') : content || '';
  return (
    <TooltipParagraph title={title || displayContent} className={`fs-14 ${className}`}>
      {displayContent}
    </TooltipParagraph>
  );
};

export default TooltipCell;
