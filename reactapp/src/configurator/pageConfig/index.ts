import { pageList } from './pageList';
import { privatePage } from './privatePage';
import { publicPage } from './publicPage';

export const pageConfig = {
  publicPage,
  defaultPrivatePage: pageList.home,
  defaultPublicPage: pageList.login,
  notFoundPage: pageList.login,
  privatePage,
};
