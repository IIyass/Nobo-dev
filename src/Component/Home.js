import React from 'react';
import Search from './Search'
import ImageResults from './Imageresult'


class Home extends React.Component {

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: "column", justifyContent: "start", height: '78%' }}>
                <Search />
                <ImageResults />
            </div>
        );
    }
}

export default Home;