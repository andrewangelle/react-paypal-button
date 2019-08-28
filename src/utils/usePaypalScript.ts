import { useState, useEffect } from 'react';

import { PaypalOptions } from '../types';
import { scriptLoadError, composeUrl } from '.';

type Props = {
  loading: boolean;
  done: boolean;
  error:boolean;
}

export function usePaypalScript(options: PaypalOptions): Props {
  let scriptCache: string[] = [];

  const url = composeUrl(options);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);


  useEffect(() => {
    // early exit if cache is in script
    if(scriptCache.includes(url)){
      setLoading(false)
      setDone(true),
      setError(false)
    } else {
      scriptCache.push(url)
    }

    let script = document.createElement('script')
    script.src = url;
    script.async = true;

    const onScriptLoad = () => {
      setLoading(false)
      setDone(true),
      setError(false)
    }

    const onScriptError = () => {
      // if we error out, retry by removing the url from the cache
      const urlIndex = scriptCache.indexOf(url);

      if(urlIndex !== -1){
        scriptCache.splice(urlIndex, 1);
        script.remove()
      }

      console.error(scriptLoadError)

      setLoading(false)
      setDone(true),
      setError(true)
    }

    script.addEventListener('load', onScriptLoad);
    script.addEventListener('error', onScriptError);

    document.body.appendChild(script)

    return () => {
      script.removeEventListener('load', onScriptLoad);
      script.removeEventListener('error', onScriptError);
    }

    // rerun if url changes
  }, [url]);

  return { loading, error, done }
}
