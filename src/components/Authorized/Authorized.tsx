import React from 'react';

interface AuthorizedProperties {
  noMatch: React.ReactNode;
}

const hasPermission = (): boolean =>
  // TODO 登录状态判断
  // if (_) return false;
  true;
const check = (childrenRender: React.ReactNode, noMatch: React.ReactNode) => {
  if (hasPermission()) return childrenRender;
  return noMatch;
};

const Authorized: React.FC<AuthorizedProperties> = ({ children, noMatch }) => {
  const childrenRender: React.ReactNode = children || <></>;
  const dom = check(childrenRender, noMatch);
  return <>{dom}</>;
};

export default Authorized;
