import { useRouteError } from "react-router-dom";
import './ErrorPage.css'

export default function ErrorPage() {
  // const error = useRouteError();
//   console.error(error);

  return (
    <div id="error-page" className='error'>
      
      <h2>Please, reload the page.</h2>
    </div>
  );
}