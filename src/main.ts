import Express from 'express';
import morgan from 'morgan';
import { routes } from './routes';

const app = Express();
app.use(Express.json());
app.use(morgan('combined'))
// Build routes
routes.forEach(({path, controller}) => {
  app.use(path, controller)
})

app.get('/', (_, res) => {
  res.json({
    message: 'hello world'
  })
})

app.listen(3000, () => {
  console.log("Stating server on port 3000")
})

