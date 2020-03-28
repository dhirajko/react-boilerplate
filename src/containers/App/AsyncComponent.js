import loadable from 'react-loadable';
import LoadingComponent from '../../components/Loading';

export const AsyncHome = loadable({
    loader: () => import('../../containers/Home/HomeContainer'),
    loading: LoadingComponent,
});

export const AsyncLoginForm = loadable({
    loader: () => import('../../containers/Auth/LoginPageContainer'),
    loading: LoadingComponent,
});

export const AsyncDashboard = loadable({
    loader: () => import('../../containers/Dashboard/DashboardContainer'),
    loading: LoadingComponent,
});

export const AsyncRegisterPage = loadable({
    loader: () => import('../../containers/Auth/RegisterPageContainer'),
    loading: LoadingComponent,
});