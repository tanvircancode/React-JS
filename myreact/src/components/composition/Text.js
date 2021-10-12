export default function text({ addEmoji, addBracket }) {
  let text = 'I am JS Language';
  if (addEmoji) {
    text = addEmoji(text, '💜');
  }
  if (addBracket) {
    text = addBracket(text);
  }
  return <div>{text}</div>;
}
