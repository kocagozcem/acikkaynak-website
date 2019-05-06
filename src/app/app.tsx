import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './layouts/default/layout';
import Home from './pages/home/index';
import News from './pages/news';
import NewsAdd from './pages/news/add';
import About from './pages/about/index';
import Events from './pages/events/index';
import EventsAdd from './pages/events/add';
import NotFound from './pages/notFound/index';

function App() {
    return (
        <Switch>
            {/* home */}
            <Route path="/" exact={true} strict={true} render={() => <Layout><Home /></Layout>} />

            {/* news */}
            <Route path="/news/add/" exact={false} strict={true} render={() => <Layout><NewsAdd /></Layout>} />
            <Route path="/news/detail/:slug" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/tags/:tag/:pageNumber" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/tags/:tag/" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/:pageNumber" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/" exact={true} strict={true} render={() => <Layout><News /></Layout>} />


            {/* events */}
            <Route path="/events/add/" exact={false} strict={true} render={() => <Layout><EventsAdd /></Layout>} />
            <Route path="/events/detail/:slug" exact={false} strict={true} render={(props) => <Layout><Events {...props.match.params} /></Layout>} />
            <Route path="/events/" exact={true} strict={true} render={() => <Layout><Events /></Layout>} />


            {/* about */}
            <Route path="/about/" exact={true} strict={true} render={() => <Layout><About /></Layout>} />


            {/* not found */}
            <Route render={() => <NotFound />} />
        </Switch>
    );
}

export {
    App as default,
};
