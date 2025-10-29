import React, { useEffect, useState } from 'react';
import { 
  Table, 
  Button, 
  Modal, 
  Form, 
  Input, 
  InputNumber, 
  message, 
  Card,
  Typography
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { adminApi } from '../../services/adminApi';

const { Title } = Typography;

// 定义资金数据接口
interface FundData {
  id: string;
  userId: string;
  balance: number;
  frozen: number;
  totalAssets: number;
}

// 定义分页数据接口
interface PaginationData {
  current: number;
  pageSize: number;
  total: number;
}

// 定义API返回数据接口
interface FundsResponse {
  funds: FundData[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
  };
}

const FundManagement: React.FC = () => {
  const [funds, setFunds] = useState<FundData[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchForm] = Form.useForm();
  const [adjustForm] = Form.useForm();
  // 移除未使用的变量 selectedUser
  const [pagination, setPagination] = useState<PaginationData>({
    current: 1,
    pageSize: 10,
    total: 0
  });

  useEffect(() => {
    fetchFunds();
  }, [pagination.current]);

  const fetchFunds = async () => {
    try {
      setLoading(true);
      const res = await adminApi.getFunds({
        page: pagination.current,
        limit: pagination.pageSize
      });
      
      // 处理返回的数据
      if (Array.isArray(res.data)) {
        setFunds(res.data);
      } else {
        // 假设返回的是包含 funds 和 pagination 的对象
        const fundsData = res.data as FundsResponse;
        if (fundsData.funds) {
          setFunds(fundsData.funds);
          // 更新分页信息
          if (fundsData.pagination) {
            setPagination({
              ...pagination,
              total: fundsData.pagination.total || 0
            });
          }
        }
      }
    } catch (error) {
      message.error('获取资金列表失败');
      console.error('获取资金列表失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (values: any) => {
    try {
      setLoading(true);
      // 这里可以添加搜索逻辑
      const res = await adminApi.getFunds({
        page: 1,
        limit: pagination.pageSize,
        ...values
      });
      
      // 处理返回的数据
      if (Array.isArray(res.data)) {
        setFunds(res.data);
      } else {
        // 假设返回的是包含 funds 和 pagination 的对象
        const fundsData = res.data as FundsResponse;
        if (fundsData.funds) {
          setFunds(fundsData.funds);
          // 更新分页信息
          if (fundsData.pagination) {
            setPagination({
              ...pagination,
              current: 1,
              total: fundsData.pagination.total || 0
            });
          }
        }
      }
    } catch (error) {
      message.error('搜索资金失败');
      console.error('搜索资金失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdjustFunds = (user: FundData) => {
    adjustForm.setFieldsValue({
      userId: user.userId
    });
    setModalVisible(true);
  };

  const handleAdjustSubmit = async () => {
    try {
      const values = await adjustForm.validateFields();
      
      await adminApi.adjustFunds(
        values.userId,
        values.amount,
        values.reason
      );
      
      message.success('资金调整成功');
      setModalVisible(false);
      adjustForm.resetFields();
      fetchFunds();
    } catch (error) {
      message.error('资金调整失败');
      console.error('资金调整失败:', error);
    }
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    adjustForm.resetFields();
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
      title: '用户ID',
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: '账户余额',
      dataIndex: 'balance',
      key: 'balance',
      render: (balance: number) => `$${balance.toFixed(2)}`
    },
    {
      title: '冻结资金',
      dataIndex: 'frozen',
      key: 'frozen',
      render: (frozen: number) => `$${frozen.toFixed(2)}`
    },
    {
      title: '可用余额',
      key: 'available',
      render: (_: any, record: FundData) => {
        const available = record.balance - record.frozen;
        return `$${available.toFixed(2)}`;
      }
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: FundData) => (
        <Button 
          type="primary" 
          onClick={() => handleAdjustFunds(record)}
        >
          调整资金
        </Button>
      )
    }
  ];

  return (
    <div className="fund-management-container">
      <Title level={2} style={{ marginBottom: 24 }}>资金管理</Title>

      <Card style={{ marginBottom: 24 }}>
        <Form form={searchForm} layout="inline" onFinish={handleSearch}>
          <Form.Item name="userId" label="用户ID">
            <Input placeholder="请输入用户ID" />
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" icon={<SearchOutlined />} htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card>
        <Table
          columns={columns}
          dataSource={funds}
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
        title="调整用户资金"
        open={modalVisible}
        onOk={handleAdjustSubmit}
        onCancel={handleModalCancel}
        okText="确定"
        cancelText="取消"
      >
        <Form form={adjustForm} layout="vertical">
          <Form.Item
            name="userId"
            label="用户ID"
          >
            <Input disabled />
          </Form.Item>
          
          <Form.Item
            name="amount"
            label="调整金额"
            rules={[{ required: true, message: '请输入调整金额' }]}
          >
            <InputNumber
              style={{ width: '100%' }}
              placeholder="正数为增加，负数为减少"
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value!.replace(/\$\s?|(,*)/g, '') as any}
            />
          </Form.Item>
          
          <Form.Item
            name="reason"
            label="调整原因"
            rules={[{ required: true, message: '请输入调整原因' }]}
          >
            <Input.TextArea rows={3} placeholder="请输入调整原因" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FundManagement;