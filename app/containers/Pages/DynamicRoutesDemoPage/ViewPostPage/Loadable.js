import loadable from 'utils/loadable';

import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./index'), { 
  LoadingComponent: LoadingIndicator,
});
