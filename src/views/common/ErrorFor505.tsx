import { Link } from 'react-router-dom';

function ErrorFor505(): JSX.Element {
  return (
    <div>
      <p>服务器出了点小问题，我们正在努力修复中，请耐心等待</p>
      <Link to="/">返回首页</Link>
    </div>
  );
}

export default ErrorFor505;
