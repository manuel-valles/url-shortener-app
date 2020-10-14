const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Short URLs for your code',
  });
});
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
