import formatRelative from 'date-fns/fp/formatRelative';

export const enGBDate = new Intl.DateTimeFormat('en-GB').format;
export const dateAgo = formatRelative(Date.now());
