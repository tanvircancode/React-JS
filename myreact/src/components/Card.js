import Button from './Button';
import Image from './Image';
import Tag from './Tag';
import Content from './Content';
import nerdImage from '../assets/images/illustration.png';


export default function Card() {
  return (
    <div className="card">
      <Content>
        <Tag color="#4361ee">EXCLUSIVE</Tag>
        <h1>React Styled Components</h1>
        <p>
          Exclusive React JS Tutorial on Styled Components where you will learn
          why we need this & how to use it.
        </p>
        <div className="buttons">
          <Button link="https://lwsbd.link/rsc" text="Watch now" />
          <Button link="https://lwsbd.link/react" text="Github repo" />
        </div>
      </Content>
      <Image src={nerdImage} alt="Nerd" width="300px" />
    </div>
  );
}
