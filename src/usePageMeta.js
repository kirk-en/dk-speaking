import { useEffect } from 'react';

// Sets the browser tab title and search description for a page.
const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title;
    const tag = document.querySelector('meta[name="description"]');
    if (tag && description) tag.setAttribute('content', description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        'href',
        `https://ivylevelspeaking.com${window.location.pathname}`
      );
    }
  }, [title, description]);
};

export default usePageMeta;
