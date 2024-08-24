'use client'

import { useState } from 'react'
import {
  Typography,
  Form,
  Input,
  Button,
  Upload,
  Select,
  Table,
  Spin,
  Row,
  Col,
  Card,
} from 'antd'
import {
  UploadOutlined,
  PlusOutlined,
  FileDoneOutlined,
  BarChartOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ExpensesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [form] = Form.useForm()
  const [fileList, setFileList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { data: expenses, refetch } = Api.expense.findMany.useQuery({
    where: { userId: user?.id },
  })
  const { mutateAsync: createExpense } = Api.expense.create.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  const handleUpload = async ({ file }) => {
    const response = await upload({ file })
    return response.url
  }

  const handleSubmit = async values => {
    setIsLoading(true)
    try {
      const receiptUrl = await handleUpload({
        file: values.receipt.file.originFileObj,
      })
      await createExpense({
        data: {
          amount: parseFloat(values.amount),
          category: values.category,
          date: dayjs(values.date).toISOString(),
          userId: user?.id,
          receiptUrl,
        },
      })
      enqueueSnackbar('Expense recorded successfully', { variant: 'success' })
      form.resetFields()
      setFileList([])
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to record expense', { variant: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  const columns = [
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: text => `$${text.toString()}`,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: text => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Receipt',
      dataIndex: 'receiptUrl',
      key: 'receiptUrl',
      render: text => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          View Receipt
        </a>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>Manage Your Expenses</Title>
          <Text>
            Record, categorize, and manage your business expenses. Attach
            receipts, manage approvals, and track expense trends with AI
            analytics.
          </Text>
        </Col>
      </Row>
      <Row gutter={16} justify="center" style={{ marginTop: 20 }}>
        <Col span={24}>
          <Card title="Record New Expense" bordered={false}>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                name="amount"
                label="Amount"
                rules={[{ required: true, message: 'Please enter the amount' }]}
              >
                <Input prefix="$" type="number" />
              </Form.Item>
              <Form.Item
                name="category"
                label="Category"
                rules={[
                  { required: true, message: 'Please select a category' },
                ]}
              >
                <Select placeholder="Select a category">
                  <Option value="Travel">Travel</Option>
                  <Option value="Meals">Meals</Option>
                  <Option value="Supplies">Supplies</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="date"
                label="Date"
                rules={[{ required: true, message: 'Please select a date' }]}
              >
                <Input type="date" />
              </Form.Item>
              <Form.Item
                name="receipt"
                label="Receipt"
                valuePropName="fileList"
                getValueFromEvent={({ file }) => file}
              >
                <Upload
                  fileList={fileList}
                  beforeUpload={() => false}
                  onChange={({ fileList }) => setFileList(fileList)}
                >
                  <Button icon={<UploadOutlined />}>Upload Receipt</Button>
                </Upload>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                  Record Expense
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} justify="center" style={{ marginTop: 20 }}>
        <Col span={24}>
          <Card title="Expense History" bordered={false}>
            {expenses ? (
              <Table dataSource={expenses} columns={columns} rowKey="id" />
            ) : (
              <Spin />
            )}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
