import Quill from 'quill';
const ImageBase = Quill.import('formats/image');

const ATTRIBUTES = [
  'alt',
  'height',
  'width',
  'style' // This is the added difference that needs to be saved properly
];

export default class CustomImage extends ImageBase {
  declare domNode: any; // Needed declaration for Typescript

  static formats(domNode) {
    return ATTRIBUTES.reduce((formats, attribute) => {
      const copy = { ...formats };

      if (domNode.hasAttribute(attribute)) {
        copy[attribute] = domNode.getAttribute(attribute);
      }

      return copy;
    }, {});
  }

  format(name, value) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }
}
