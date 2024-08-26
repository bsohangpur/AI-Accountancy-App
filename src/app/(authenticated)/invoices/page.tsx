'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'
import {
  DeleteOutlined,
  DollarCircleOutlined,
  EditOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import {
  Button,
  DatePicker,
  Form,
  InputNumber,
  Modal,
  Select,
  Space,
  Spin,
  Table,
  Typography,
} from 'antd'
import dayjs from 'dayjs'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
const { Title, Text } = Typography
const { Option } = Select

export default function InvoicesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: invoices,
    isLoading,
    refetch,
  } = Api.invoice.findMany.useQuery({ where: { userId: user?.id } })
  const { mutateAsync: createInvoice } = Api.invoice.create.useMutation()
  const { mutateAsync: updateInvoice } = Api.invoice.update.useMutation()
  const { mutateAsync: deleteInvoice } = Api.invoice.delete.useMutation()
  const { mutateAsync: generateText } = Api.ai.generateText.useMutation()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingInvoice, setEditingInvoice] = useState(null)

  const handleCreateOrUpdate = async values => {
    try {
      if (editingInvoice) {
        await updateInvoice({ where: { id: editingInvoice.id }, data: values })
        enqueueSnackbar('Invoice updated successfully', { variant: 'success' })
      } else {
        await createInvoice({ data: { ...values, userId: user?.id } })
        enqueueSnackbar('Invoice created successfully', { variant: 'success' })
      }
      refetch()
      setIsModalVisible(false)
      setEditingInvoice(null)
    } catch (error) {
      enqueueSnackbar('Error creating/updating invoice', { variant: 'error' })
    }
  }

  const handleDelete = async id => {
    try {
      await deleteInvoice({ where: { id } })
      enqueueSnackbar('Invoice deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error deleting invoice', { variant: 'error' })
    }
  }

  const handleAI = async () => {
    try {
      //@ts-ignore
      const response = await generateText.mutateAsync({
        prompt: 'Predict payment delays for my invoices',
      })
      enqueueSnackbar(`AI Prediction: ${response.answer}`, { variant: 'info' })
    } catch (error) {
      enqueueSnackbar('Error with AI prediction', { variant: 'error' })
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
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      render: text => dayjs(text).format('YYYY-MM-DD'),
    },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setEditingInvoice(record)
              setIsModalVisible(true)
            }}
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Invoices</Title>
      <Text>
        Create, manage, and track your invoices. Use AI to predict payment
        delays and optimize payment terms.
      </Text>
      <Space style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalVisible(true)}
        >
          Create Invoice
        </Button>
        <Button icon={<DollarCircleOutlined />} onClick={handleAI}>
          AI Predictions
        </Button>
      </Space>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Table dataSource={invoices} columns={columns} rowKey="id" />
      )}
      <Modal
        title={editingInvoice ? 'Edit Invoice' : 'Create Invoice'}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false)
          setEditingInvoice(null)
        }}
        footer={null}
      >
        <Form initialValues={editingInvoice} onFinish={handleCreateOrUpdate}>
          <Form.Item
            name="amount"
            label="Amount"
            rules={[{ required: true, message: 'Please input the amount!' }]}
          >
            <InputNumber min={0} prefix="$" />
          </Form.Item>
          <Form.Item
            name="dueDate"
            label="Due Date"
            rules={[{ required: true, message: 'Please select the due date!' }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select the status!' }]}
          >
            <Select>
              <Option value="Pending">Pending</Option>
              <Option value="Paid">Paid</Option>
              <Option value="Overdue">Overdue</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingInvoice ? 'Update' : 'Create'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
