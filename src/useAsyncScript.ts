import { useState, useEffect } from 'react';

export function useAsyncScript(url: string){
  let cache: string[] = [];

  const [state, setState] = useState({
    loading: true,
    done: false,
    error: false
  });

  useEffect(() => {
    if(cache.includes(url)){
      setState({
        loading: false,
        done: true,
        error: false
      })
    } else {
      cache.push(url)
    }

    let script = document.createElement('script')
    script.src = url;
    script.async = true;

    const onScriptLoad = () => {
      setState({
        loading: false,
        done: true,
        error: false
      })
    }

    const onScriptError = () => {
      const index = cache.indexOf(url);
      if(index !== -1){
        cache.splice(index, 1);
        script.remove()
      }
      setState({
        loading: false,
        done: true,
        error: true
      })
    }

    script.addEventListener('load', onScriptLoad);
    script.addEventListener('error', onScriptError);

    document.body.appendChild(script)

    return () => {
      script.removeEventListener('load', onScriptLoad);
      script.removeEventListener('error', onScriptError);
    }
  }, [url]);

  return state
}