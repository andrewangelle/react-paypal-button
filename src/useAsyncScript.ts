import { useState, useEffect } from 'react';

export default function useAsyncScript(url: string) {
  let scriptCache: string[] = [];

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

  return {loading, error, done}
}