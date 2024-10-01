import { useEffect } from 'react';
import VueFooter from 'vue-components/footer';
import {createApp} from 'vue';


export default function AppFooter() {
  useEffect(()=> {
    const app = createApp(VueFooter);
    app.mount("#vue-root");
    return () => app.unmount();
  },[])

  return <div id='vue-root'/>
}
