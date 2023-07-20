import {BackgroundThemeModel, ThemeModel} from '../../app/_models/general/theme.model';

export class ThemeHandler {

  constructor() {
    this.setDefaultTheme();
  }

  selectThemeBackground(themeBackground: BackgroundThemeModel = new BackgroundThemeModel()) {
    if (themeBackground.isDark) {
      document.documentElement.style.setProperty('--theme-background-color', themeBackground.darkThemeBackgroundColor);
      document.documentElement.style.setProperty('--theme-card-background-color', themeBackground.darkThemeCardBackgroundColor);
      document.documentElement.style.setProperty('--theme-input-background-color', themeBackground.darkThemeInputBackgroundColor);
      document.documentElement.style.setProperty('--theme-main-text', themeBackground.darkThemeMainTextColor);
      document.documentElement.style.setProperty('--theme-secondary-text', themeBackground.darkThemeSecondaryTextColor);
    } else {
      document.documentElement.style.setProperty('--theme-background-color', themeBackground.lightThemeBackgroundColor);
      document.documentElement.style.setProperty('--theme-card-background-color', themeBackground.lightThemeCardBackgroundColor);
      document.documentElement.style.setProperty('--theme-input-background-color', themeBackground.lightThemeInputBackgroundColor);
      document.documentElement.style.setProperty('--theme-main-text', themeBackground.lightThemeMainTextColor);
      document.documentElement.style.setProperty('--theme-secondary-text', themeBackground.lightThemeSecondaryTextColor);
    }
  }

  setDefaultTheme() {
    document.documentElement.style.setProperty('--primary-color', '#03A9F4');
    document.documentElement.style.setProperty('--primary-color-dark', '#0288D1');
    document.documentElement.style.setProperty('--primary-color-light', '#B3E5FC');
    document.documentElement.style.setProperty('--primary-color-complimentary', '#05BDEA');
    document.documentElement.style.setProperty('--accent-color', '#FA6400');
    document.documentElement.style.setProperty('--warning-color', '#C50F30');

    // document.documentElement.style.setProperty('--dark-theme-background', '#1A1A1A');
    // document.documentElement.style.setProperty('--dark-theme-level-one', '#313132');
    // document.documentElement.style.setProperty('--light-theme-background', '#F4F5F9');
    // document.documentElement.style.setProperty('--light-theme-level-one', '#FFFFFF');
    // document.documentElement.style.setProperty('--theme-background-color', '#FFFFFF');
    // document.documentElement.style.setProperty('--border-color', '#979797');
    // document.documentElement.style.setProperty('--theme-main-text', '#1A1A1A');
    // document.documentElement.style.setProperty('--theme-secondary-text', '#313132');
  }

  selectTheme(theme: ThemeModel) {
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
    document.documentElement.style.setProperty('--primary-color-dark', theme.primaryColorDark);
    document.documentElement.style.setProperty('--primary-color-light', theme.primaryColorLight);
    document.documentElement.style.setProperty('--primary-color-complimentary', theme.primaryColorComplimentary);
    document.documentElement.style.setProperty('--accent-color', theme.accentColor);
    document.documentElement.style.setProperty('--warning-color', theme.warningColor);
  }

}
