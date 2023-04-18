import Express from 'express';
import { routes } from './routes';

const app = Express();
app.use(Express.json());

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

