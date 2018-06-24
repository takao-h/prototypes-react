import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';

export default class IconTabs extends React.Component {
  state = {
    value: 0,
  };  

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Paper style={{ width: 375 }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<HomeIcon color="disabled" className="home" style={{ fontSize: 36 }} />} />
          <Tab icon={<FavoriteIcon color="disabled" className="home" style={{ fontSize: 36 }} />} />
          <Tab icon={<PersonIcon color="disabled" className="home" style={{ fontSize: 36 }} />} />
        </Tabs>
      </Paper>
    );
  }
}