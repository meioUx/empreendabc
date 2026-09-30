import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
};

const isInternal = (href: string) => href.startsWith('/') || href.startsWith('#');

export function ExternalLink({ href, children, className = '', showIcon = true }: ExternalLinkProps) {
  if (isInternal(href)) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
      {showIcon && <ExternalLinkIcon aria-hidden="true" className="h-4 w-4" />}
    </a>
  );
}
