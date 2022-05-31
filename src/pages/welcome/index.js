import React from 'react'
import { Button } from 'antd';
import { Translation } from 'react-i18next';
import i18n from 'i18next';

const Welcome = () => {

    return <div>
        Welcome
        <Translation>
            {
                t => {
                    return (
                        <div>
                            <Button onClick={() => i18n.changeLanguage('zh')}>{t('切换到中文')}</Button>
                            <Button onClick={() => i18n.changeLanguage('en')}>{t('切换到英文')}</Button>
                            {t('methods.renderProps')}
                        </div>
                    );
                }
            }
        </Translation>
    </div>
}

export default Welcome