import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Search from './Search'
import ImageResults from './Imageresult'

class Home extends React.Component {

    render() {
        return (
<>
<Search />
 <ImageResults />
</>
 );
         }}

export default Home;