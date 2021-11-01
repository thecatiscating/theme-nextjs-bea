import { Category } from '@prezly/sdk/dist/types';

import { convertToPrezlyFormat } from '../localeTransform';

export function getLocalizedCategoryData(category: Category, locale: string) {
    const { i18n } = category;
    const populatedLocales = Object.keys(i18n).filter((localeCode) =>
        Boolean(i18n[localeCode].name),
    );
    const targetLocale =
        populatedLocales.find((localeCode) => localeCode === convertToPrezlyFormat(locale)) ||
        populatedLocales.find((localeCode) => i18n[localeCode].name === category.display_name) ||
        populatedLocales[0];

    return i18n[targetLocale];
}

export function getCategoryUrl(category: Category, locale: string) {
    const { slug } = getLocalizedCategoryData(category, locale);
    return `/category/${slug}`;
}

export function getCategoryHasTranslation(category: Category, locale: string) {
    const { i18n } = category;
    const populatedLocales = Object.keys(i18n).filter((localeCode) =>
        Boolean(i18n[localeCode].name),
    );
    return Boolean(
        populatedLocales.find((localeCode) => localeCode === convertToPrezlyFormat(locale)),
    );
}
