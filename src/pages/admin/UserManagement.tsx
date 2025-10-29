import React, { useEffect, useState } from 'react';
import { 
  Table, 
  Button, 
  Modal, 
  Form, 
  Input, 
  Select, 
  message, 
  Card,
  Row,
  Col,
  Typography
} from 'antd';
import { useConfirmAction } from '../../hooks/useConfirmAction';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { adminApi } from '../../services/adminApi';

const { Title } = Typography;
const { Option } = Select;

// 定义用户数据接口
interface UserData {
  id: string;
  username: string;
  role: string;
  email: string;
  createdAt: string;
  balance: number;
  totalAssets: number;
}

// 定义分页数据接口
interface PaginationData {
  current: number;
  pageSize: number;
  total: number;
}

// 定义API返回数据接口
interface UsersResponse {
  users: UserData[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
  };
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState<UserData | null>(null);
  const [form] = Form.useForm();
  const [pagination, setPagination] = useState<PaginationData>({
    current: 1,
    pageSize: 10,
    total: 0
  });

  useEffect(() => {
    fetchUsers();
  }, [pagination.current]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await adminApi.getUsers({
        page: pagination.current,
        limit: pagination.pageSize
      });
      
      // 处理返回的数据
      if (Array.isArray(res.data)) {
        setUsers(res.data);
      } else {
        // 假设返回的是包含 users 和 pagination 的对象
        const usersData = res.data as UsersResponse;
        if (usersData.users) {
          setUsers(usersData.users);
          // 更新分页信息
          if (usersData.pagination) {
            setPagination({
              ...pagination,
              total: usersData.pagination.total || 0
            });
          }
        }
      }
    } catch (error) {
      message.error('获取用户列表失败');
      console.error('获取用户列表失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = () => {
    setEditingUser(null);
    form.resetFields();
    setModalVisible(true);
  };

  const handleEditUser = (user: UserData) => {
    setEditingUser(user);
    form.setFieldsValue(user);
    setModalVisible(true);
  };

  const { confirmAction: confirmDelete } = useConfirmAction(
    async (userId: string) => {
      await adminApi.deleteUser(userId);
      message.success('用户删除成功');
      fetchUsers();
    },
    {
      title: '删除用户',
      content: '确定要删除该用户吗？此操作不可恢复。',
      okText: '确认删除',
      cancelText: '取消'
    }
  );

  const handleDeleteUser = async (userId: string) => {
    try {
      await confirmDelete(userId);
    } catch (error) {
      if (error instanceof Error && error.message !== '用户取消操作') {
        message.error('删除用户失败');
        console.error('删除用户失败:', error);
      }
    }
  };

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields();
      
      if (editingUser) {
        // 更新用户
        await adminApi.updateUser(editingUser.id, values);
        message.success('用户更新成功');
      } else {
        // 创建用户
        await adminApi.createUser(values);
        message.success('用户创建成功');
      }
      
      setModalVisible(false);
      form.resetFields();
      fetchUsers();
    } catch (error) {
      message.error(editingUser ? '用户更新失败' : '用户创建失败');
      console.error(editingUser ? '用户更新失败:' : '用户创建失败:', error);
    }
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    form.resetFields();
  };

  const handleTableChange = (page: number, pageSize?: number) => {
    setPagination({
      ...pagination,
      current: page,
      pageSize: pageSize || pagination.pageSize
    });
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      render: (role: string) => (
        <span>{role === 'admin' ? '管理员' : '普通用户'}</span>
      )
    },
    {
      title: '余额',
      dataIndex: 'balance',
      key: 'balance',
      render: (balance: number) => `$${balance.toFixed(2)}`
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: UserData) => (
        <div>
          <Button 
            type="link" 
            icon={<EditOutlined />} 
            onClick={() => handleEditUser(record)}
          >
            编辑
          </Button>
          <Button 
            type="link" 
            icon={<DeleteOutlined />} 
            danger
            onClick={() => handleDeleteUser(record.id)}
          >
            删除
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="user-management-container">
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Col>
          <Title level={2}>用户管理</Title>
        </Col>
        <Col>
          <Button 
            type="primary" 
            icon={<PlusOutlined />} 
            onClick={handleCreateUser}
          >
            新建用户
          </Button>
        </Col>
      </Row>

      <Card>
        <Table
          columns={columns}
          dataSource={users}
          loading={loading}
          rowKey="id"
          pagination={{
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: pagination.total,
            onChange: handleTableChange
          }}
        />
      </Card>

      <Modal
        title={editingUser ? "编辑用户" : "新建用户"}
        open={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="确定"
        cancelText="取消"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' }
            ]}
          >
            <Input />
          </Form.Item>
          
          {!editingUser && (
            <Form.Item
              name="password"
              label="密码"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password />
            </Form.Item>
          )}
          
          <Form.Item
            name="role"
            label="角色"
            rules={[{ required: true, message: '请选择角色' }]}
          >
            <Select>
              <Option value="user">普通用户</Option>
              <Option value="admin">管理员</Option>
            </Select>
          </Form.Item>
          
          <Form.Item
            name="balance"
            label="余额"
            rules={[{ required: true, message: '请输入余额' }]}
          >
            <Input type="number" prefix="$" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserManagement;