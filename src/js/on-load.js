import { loadTogler } from './form-submit';
import { storageSave, storageLoad } from './storage';
import { colorTheme } from './theme';

export const onLoad = () => {
    let currentTheme = 'light';
    if (storageLoad('theme')) {
        currentTheme = storageLoad('theme');
        document
            .querySelector(`[value=${storageLoad('theme')}]`)
            .setAttribute('checked', 'true');
    } else {
        storageSave('theme', 'light');
    }

    if (storageLoad('load')) {
        document
            .querySelector(`[value=${storageLoad('load')}]`)
            .setAttribute('checked', 'true');
        if (storageLoad('load') === 'auto') loadTogler(true);
        else loadTogler(false);
    } else {
        storageSave('load', 'auto');
    }
    colorTheme(currentTheme);
};
