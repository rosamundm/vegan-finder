import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 1
};

export const AboutModal: React.FC = () => {

  const [isOpen, toggle] = useState(false);
  const handleOpen = () => toggle(true);
  const handleClose = () => toggle(false);

  return (
    <div>
      <Button onClick={handleOpen}>About</Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Hello!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="modal-paragraph">
              My name is Rosamund and I have been vegan since 2011. One of the reasons I was sure I 
              wanted to move to Berlin was its amazing vegan scene (and back in the early 2010s, you 
              really couldn't say that for every European capital).
            </div>
            <div className="modal-paragraph">
              Things have changed. Veganism has since become more mainstream and, depending on who you 
              ask, possibly more accessible. There's a lot more on the market. With so much choice, stuff 
              of real quality is harder to find. I've had great experiences at places I keep coming back to, 
              but also been to places where I've told myself, "never again" (or at least, "this is overrated").
            </div>
            <div className="modal-paragraph">
              That's why I've put my personal recommendations here. <b>This does not serve as a general vegan 
              map of Berlin!</b> You will find plenty of websites that already do that. As such, I don't take 
              suggestions. <em>Ich kenne mich hier schon ziemlich gut aus.</em>
            </div>
          </Typography>
          <TermsModal />
        </Box>
      </Modal>
    </div>
  );
};

export const TermsModal: React.FC = () => {

  const [isOpen, toggle] = useState(false);
  const handleOpen = () => toggle(true);
  const handleClose = () => toggle(false);

  return (
    <div>
      <Button onClick={handleOpen}>See terms</Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Usual disclaimers:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ul>
            <li className="modal-list-item">
              All opinions are my own. I'm not being paid by any of these places.
            </li>
            <li className="modal-list-item">
              I am not liable for any information listed here that ceases to be up-to-date. 
              However, you are free to <a href="https://github.com/rosamundm/vegan-finder/issues">open an issue</a>, 
              or send a good old-fashioned email to <i>rosamund at posteo dot de</i> and I'll get round to changing it.
            </li>
            <li className="modal-list-item">
              Background image courtesy of <a href="https://unsplash.com/photos/2IxTgsgFi-s">Ella Olsson / Unsplash</a>.
            </li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};