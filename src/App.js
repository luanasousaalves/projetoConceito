import Menu from "./componentes/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Nav, Navbar } from 'react-bootstrap';
import Cartao from "./componentes/Cartao";
import Luana from "./componentes/Luana";


function App() {
  return (
    <div>
      
      <Menu />
      <Cartao titulo="qualquer coisa"  imagem="https://marketplace.canva.com/EAE3r8IAM_k/1/0/1600w/canva-quando-me-olho-no-espelho---meme-zZuz94COFsI.jpg">
          <p>hbsdhbh</p>

      </Cartao>
      <Luana />

      <Container>
        <Card style={{ width: '18rem' }} className='mb-3'>
          <Card.Img variant="top" src="https://marketplace.canva.com/EAE3r8IAM_k/1/0/1600w/canva-quando-me-olho-no-espelho---meme-zZuz94COFsI.jpg" />
          <Card.Header>Macaco bonitinho</Card.Header>
          <Card.Body>
            <Card.Title>Macaquinho</Card.Title>
            <Card.Text>
              Macaquinho capa de revista 100%
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className='mb-3'>
          <Card.Img variant="top" src="https://s2.glbimg.com/u9kjj3s_n1MbEkXhvtDhdnorc7w=/0x0:535x583/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/e/O/aqCMmST1qmjfJaL63cKQ/meme-1.jpg" />
          <Card.Header>Vida complicada</Card.Header>
          <Card.Body>
            <Card.Title>Vamos de carro importado</Card.Title>
            <Card.Text>
              Passagem mais cara que a gasolina?
            </Card.Text>
          </Card.Body>
        </Card>

        
        <h1>Hello world</h1>

        <Button variant="primary">Primary</Button>
      </Container>

    </div>

  );
}

export default App;
