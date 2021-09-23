export default function auth({ next, router }) {

    if (!sessionStorage.getItem('user-token')) {
        return next();
    }
    return router.go(-1);
}