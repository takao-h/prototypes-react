import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';
import './App.css';
import Paper from '@material-ui/core/Paper';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  const persons = () => {
    <PersonIcon color="disabled" className="home" style={{ fontSize: 70 }} />
  }
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
      <Card className={classes.card}>
        <CardContent>
          <PersonIcon color="disabled" className="home" style={{ fontSize: 70 }} />
          <form>
          <TextField
            defaultValue="39"
            label="ポイント"
            id="bootstrap-input"
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              },
            }}
             InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel,
            }}
          />
            <TextField
            defaultValue=""
            label="メッセージ"
            id="message"
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              },
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel,
            }}
           />
          </form>
        </CardContent>
        <CardActions>
          <Button class="thankyouButton" size="medium" style={{margin:'auto',width:'50%'}}>ありがとうをおくる</Button>
        </CardActions>
      </Card>
      </Paper>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);