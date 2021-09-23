export default function auth({ next, router }) {

    if (!sessionStorage.getItem('user-token')) {
        return router.push({ name: 'login' });
    }
    return next();
}