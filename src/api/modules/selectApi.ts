/**
 * @name 下拉
 */
// 获取按钮权限
const StatusSelect = () => {
  // return http.get(PORT1 + `/auth/buttons`, {}, { loading: false });
  // 如果想让按钮权限变为本地数据，注释上一行代码，并引入本地 authButtonList.json 数据
  return [
    { label: "是", value: 1 },
    { label: "否", value: 0 }
  ];
};

export default { StatusSelect };
