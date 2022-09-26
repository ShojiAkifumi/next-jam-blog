import React from "react";
import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";

type Props = {
  dateISO: string;
};

const ConvertDate = ({ dateISO }: Props) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), "yyyy年MM月dd日", { locale: ja })}
    </time>
  );
};

export default ConvertDate;
