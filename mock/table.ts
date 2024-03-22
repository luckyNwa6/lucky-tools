// 表格数据
function createList() {
  return [
    {
      tenantId: '1390101533310976',
      userId: '1711554162715996162',
      username: 'tt123',
      nickname: 'ttya123',
      mobileNo: '15559197316',
      emailNo: 'liuconsist@163.com',
      groupId: '1711554161315098626',
      groupName: 'tt12324',
      enabled: true,
      roleId: '1711554163529691137',
      roleName: 'admin',
      primaryAccount: true,
      createdTime: '2023-10-10 09:28:06',
      remark: null,
    },
    {
      tenantId: '1390101533310976',
      userId: '1751865399961919490',
      username: 'tt',
      nickname: 'tt',
      mobileNo: '',
      emailNo: '',
      groupId: '1711554161315098626',
      groupName: 'tt12324',
      enabled: true,
      roleId: '1711554163529691137',
      roleName: 'admin',
      primaryAccount: false,
      createdTime: '2024-01-29 15:10:34',
      remark: '',
    },
  ]
}

export default [
  // 获取用户信息
  {
    url: '/api/home-list/page',
    method: 'get',
    response: (request) => {
      const { pageNum, pageSize, nickname, groupId, username, status } =
        request.query

      // 模拟数据库查询数据
      const userList = createList().filter((user) => {
        return (
          (!nickname || user.nickname.includes(nickname)) &&
          (!groupId || user.groupId === groupId) &&
          (!username || user.username.includes(username)) &&
          (!status || (user.enabled ? 'enabled' : 'disabled') === status)
        )
      })

      const total = userList.length
      const start = (pageNum - 1) * pageSize
      const end = pageNum * pageSize

      const paginatedUsers = userList.slice(start, end)

      if (paginatedUsers.length === 0) {
        return { code: 201, data: { message: 'No data found!' } }
      }

      return {
        code: 200,
        data: {
          records: paginatedUsers,
          total: total,
          size: pageSize,
          current: pageNum,
          orders: [],
          optimizeCountSql: true,
          searchCount: true,
          countId: null,
          maxLimit: null,
          pages: Math.ceil(total / pageSize),
        },
        message: 'Success',
      }
    },
  },
]
