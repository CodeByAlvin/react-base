import { Link } from 'react-router-dom';

function ErrorFor404(): JSX.Element {
  return (
    <div>
      <p>您要找的页面不存在了</p>
      <Link to="/">返回首页</Link>
    </div>
  );
}

export default ErrorFor404;
