import React, { FunctionComponent } from 'react';
import { ExternalLink } from 'react-external-link';
import InternalLink from './InternalLink';

interface LinkProps {
  href: string;
}

const Link: FunctionComponent<LinkProps> = (props) => {
  const { href } = props;
  const Component = href && href.startsWith('http') ? ExternalLink : InternalLink;

  return <Component {...props} />;
};

export default Link;
