import React, { useEffect, useState } from 'react';
import { 
  Table, 
  Button, 
  Form, 
  Input, 
  Select, 
  message, 
  Card,
  Typography,
  Tag,
  DatePicker
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { adminApi } from '../../services/adminApi';
import dayjs from 'dayjs';

const { Title } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;

// 定义交易数据接口
interface TradeData {
  id: string;
  userId: string;
  asset: string;
  type: string;
  quantity: number;
  price: number;
  status: string;
  timestamp: string;
}

// 定义分页数据接口
interface PaginationData {
  current: number;
  pageSize: number;
  total: number;
}

// 定义API返回数据接口
interface TradesResponse {
  trades: TradeData[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
  };
}

const TradeManagement: React.FC = () => {
  const [trades, setTrades] = useState<TradeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchForm] = Form.useForm();
  const [pagination, setPagination] = useState<PaginationData>({
    current: 1,
    pageSize: 10,
    total: 0
  });

  useEffect(() => {
    fetchTrades();
  }, [pagination.current]);

  const fetchTrades = async () => {
    try {
      setLoading(true);
      const res = await adminApi.getTrades({
        page: pagination.current,
        limit: pagination.pageSize
      });
      
      // 处理返回的数据
      if (Array.isArray(res.data)) {
        setTrades(res.data);
      } else {
        // 假设返回的是包含 trades 和 pagination 的对象
        const tradesData = res.data as TradesResponse;
        if (tradesData.trades) {
          setTrades(tradesData.trades);
          // 更新分页信息
          if (tradesData.pagination) {
            setPagination({
              ...pagination,
              total: tradesData.pagination.total || 0
            });
          }
        }
      }
    } catch (error) {
      message.error('获取交易列表失败');
      console.error('获取交易列表失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (values: any) => {
    try {
      setLoading(true);
      // 这里可以添加搜索逻辑
      const res = await adminApi.getTrades({
        page: 1,
        limit: pagination.pageSize,
        ...values
      });
      
      // 处理返回的数据
      if (Array.isArray(res.data)) {
        setTrades(res.data);
      } else {
        // 假设返回的是包含 trades 和 pagination 的对象
        const tradesData = res.data as TradesResponse;
        if (tradesData.trades) {
          setTrades(tradesData.trades);
          // 更新分页信息
          if (tradesData.pagination) {
            setPagination({
              ...pagination,
              current: 1,
              total: tradesData.pagination.total || 0
            });
          }
        }
      }
    } catch (error) {
      message.error('搜索交易失败');
      console.error('搜索交易失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (tradeId: string, status: string) => {
    try {
      await adminApi.updateTradeStatus(tradeId, status);
      message.success('交易状态更新成功');
      fetchTrades();
    } catch (error) {
      message.error('更新交易状态失败');
      console.error('更新交易状态失败:', error);
    }
  };

  const handleTableChange = (page: number, pageSize?: number) => {
    setPagination({
      ...pagination,
      current: page,
      pageSize: pageSize || pagination.pageSize
    });
  };

  const getStatusTag = (status: string) => {
    const statusMap: Record<string, { color: string; text: string }> = {
      'completed': { color: 'green', text: '已完成' },
      'pending': { color: 'orange', text: '处理中' },
      'cancelled': { color: 'red', text: '已取消' }
    };
    
    const config = statusMap[status] || { color: 'gray', text: '未知' };
    return <Tag color={config.color}>{config.text}</Tag>;
  };

  const columns = [
    {
      title: '订单号',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '用户ID',
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: '交易品种',
      dataIndex: 'asset',
      key: 'asset'
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: '数量',
      dataIndex: 'quantity',
      key: 'quantity'
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `$${price.toFixed(2)}`
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: getStatusTag
    },
    {
      title: '时间',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (timestamp: string) => dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: TradeData) => (
        <div>
          {record.status === 'pending' && (
            <>
              <Button 
                type="link" 
                onClick={() => handleUpdateStatus(record.id, 'completed')}
              >
                完成
              </Button>
              <Button 
                type="link" 
                danger
                onClick={() => handleUpdateStatus(record.id, 'cancelled')}
              >
                取消
              </Button>
            </>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="trade-management-container">
      <Title level={2} style={{ marginBottom: 24 }}>交易管理</Title>

      <Card style={{ marginBottom: 24 }}>
        <Form form={searchForm} layout="inline" onFinish={handleSearch}>
          <Form.Item name="userId" label="用户ID">
            <Input placeholder="请输入用户ID" />
          </Form.Item>
          
          <Form.Item name="asset" label="交易品种">
            <Input placeholder="请输入交易品种" />
          </Form.Item>
          
          <Form.Item name="status" label="状态">
            <Select placeholder="请选择状态" style={{ width: 120 }}>
              <Option value="completed">已完成</Option>
              <Option value="pending">处理中</Option>
              <Option value="cancelled">已取消</Option>
            </Select>
          </Form.Item>
          
          <Form.Item name="dateRange" label="时间范围">
            <RangePicker />
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
          dataSource={trades}
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
    </div>
  );
};

export default TradeManagement;