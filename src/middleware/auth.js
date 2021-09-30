export default function auth({ next, router }) {

    if (!localStorage.getItem('user-token')) {
        return router.push({ name: 'ec-login' });
    }
    return next();
}