import { useState, useEffect } from 'react';

import { PayPalButtonProps } from './types';
import composeUrl from './composeUrl';

type Props = {
  loading: boolean;
  done: boolean;
  error:boolean;
}

function usePaypalScript(props: PayPalButtonProps): Props {
  let scriptCache: string[] = [];

  const url = composeUrl(props.paypalOptions);

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

export default usePaypalScript