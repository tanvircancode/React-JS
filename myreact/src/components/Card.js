import Button from './Button';
import Image from './Image';
// import Content from './Content';
import nerdImage from '../assets/images/illustration.png';
import { CardContainer, ContentContainer , ButtonContainer} from './styles/Container.styles';
import {Tag,H1,P} from './styles/Elements';


export default function Card() {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag color="#4361ee">EXCLUSIVE</Tag>
        <H1 color="#fff">React Styled Components</H1>
        <P>
          Exclusive React JS Tutorial on Styled Components where you will learn
          why we need this & how to use it.
        </P>
        <ButtonContainer>
          <Button link="https://lwsbd.link/rsc" text="Watch now" />
          <Button link="https://lwsbd.link/react" text="Github repo" />
        </ButtonContainer>
      </ContentContainer>
      <Image imgSrc={nerdImage} alt="Nerd" width="300px" />
    </CardContainer>
  );
}
