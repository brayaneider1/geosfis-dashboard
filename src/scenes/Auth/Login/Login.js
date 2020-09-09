import * as React from 'react';
import { Row, Col,Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormLogin } from "./FormLogin/FormLogin"

export const Login = () => {

  const { t } = useTranslation();

  return (
    <div className="component-login">
      <Card className="card-content">
          <h1>{t('login')}</h1>

      <FormLogin/>
      </Card>
    </div>
  )
}