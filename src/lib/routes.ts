interface Route {
    name: string;
    path: string;
    meta: {
        title: string;
    }
}

const routes: Route[] = [
    {name: 'home', path: '/', meta: {title: 'Home'} },
    {name: 'gallery', path: '/gallery', meta: {title: 'Gallery'} },
    {name: 'shop', path: '/shop', meta: {title: 'Shop'} },
    {name: 'contact', path: '/contact', meta: {title: 'Contact'} },
    {name: 'about', path: '/about', meta: {title: 'About'} },
    {name: 'faqs', path: '/faqs', meta: {title: 'FAQ\'s'} },
    // Add more routes as needed
]

export default routes;