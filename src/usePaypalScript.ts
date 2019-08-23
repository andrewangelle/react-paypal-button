import { useState, useEffect } from 'react';
import { PayPalButtonProps } from './types';
import typeGuard from './typeGuard';
import composeUrl from './composeUrl';

function usePaypalScript(props: PayPalButtonProps) {
  let scriptCache: string[] = [];
  const apiKey = props.sandboxID || props.productionID
  const url = composeUrl(typeGuard(apiKey));

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);


  useEffect(() => {
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
  }, [url]);

  return { loading, error, done }
}

export default usePaypalScript