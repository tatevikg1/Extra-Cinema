export default function auth({ next, router }) {

    if (!localStorage.getItem('user-token')) {
        return next();
    }
    return router.go(-1);
}