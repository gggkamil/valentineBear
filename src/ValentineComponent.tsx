import React, { useState } from 'react';
import { Button, Grid, Header, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

const ValentineComponent: React.FC = () => {
  const [noButtonIndex, setNoButtonIndex] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(16);
  const [showYesGif, setShowYesGif] = useState(false);

  const handleYesButtonClick = () => {
    setYesButtonSize((prevSize) => prevSize + 20);
    setShowYesGif(true);
  };

  const handleNoButtonClick = () => {
    setNoButtonIndex((prevIndex) => (prevIndex + 1) % noButtonTexts.length);
    setYesButtonSize((prevSize) => prevSize + 20);
    setShowYesGif(false);
  };

  const noButtonTexts = ['No','Are you sure?', 'Think about it', 'Really sure?', 'Are you positive?','i will be very sad','I will be veeeerrry sad'];

  return (
    
      <div>
        {!showYesGif && (
          <>
            <Image
            centered
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              alt="Valentine's Day Gif" 
            />
            <Header as='h1' textAlign='center' >Will you be my Valentine?</Header>
            <div>
  <Grid>
    <Grid.Column textAlign="center">
    <Button
              center
                color='green'
                style={{ fontSize: yesButtonSize }}
                onClick={handleYesButtonClick}
              >
                Yes
              </Button>
              <Button
              
                color='red'
                onClick={handleNoButtonClick}
              >
                {noButtonTexts[noButtonIndex]}
              </Button>
    </Grid.Column>
  </Grid>


            </div>
          </>
        )}
        {showYesGif && (
          <div >
            <Image
            centered
            
              
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="Bear Kiss"
            />
            <Header as='h1' textAlign='center' >Love you!</Header>
          </div>
        )}
      </div>
    
  );
};

export default ValentineComponent;
