import React from "react";

import { useTranslation } from "react-i18next";
const Examplei118 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t("React I18")}</h2>;
    </div>
  );
};

export default Examplei118;
