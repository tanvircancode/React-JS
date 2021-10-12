import Emoji from './Emoji';

export default class Text extends Emoji {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const decoratedEmoji = this.addEmoji('I love JavaScript', '❤');

    return super.render(decoratedEmoji);
  }
}
