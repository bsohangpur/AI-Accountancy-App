'use client'

import { useState, useEffect } from 'react'
import {
  Typography,
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  Space,
  Alert,
} from 'antd'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
const { confirm } = Modal
import { Prisma } from '@prisma/client'
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function InventoryPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [inventoryData, setInventoryData] = useState<
    Prisma.InventoryGetPayload<{ include: { user: true } }>[] | null
  >(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingItem, setEditingItem] = useState<Prisma.InventoryGetPayload<{
    include: { user: true }
  }> | null>(null)

  const {
    data: inventorys,
    isLoading,
    refetch,
  } = Api.inventory.findMany.useQuery({ include: { user: true } })
  const { mutateAsync: createInventory } = Api.inventory.create.useMutation()
  const { mutateAsync: updateInventory } = Api.inventory.update.useMutation()
  const { mutateAsync: deleteInventory } = Api.inventory.delete.useMutation()

  useEffect(() => {
    if (inventorys) {
      setInventoryData(inventorys)
    }
  }, [inventorys])

  const handleAdd = () => {
    setEditingItem(null)
    setIsModalVisible(true)
  }

  const handleEdit = (
    item: Prisma.InventoryGetPayload<{ include: { user: true } }>,
  ) => {
    setEditingItem(item)
    setIsModalVisible(true)
  }

  const handleDelete = (id: string) => {
    confirm({
      title: 'Are you sure you want to delete this item?',
      icon: <ExclamationCircleOutlined />,
      onOk: async () => {
        await deleteInventory({ where: { id } })
        enqueueSnackbar('Item deleted successfully', { variant: 'success' })
        refetch()
      },
    })
  }

  const handleModalOk = async (values: any) => {
    if (editingItem) {
      await updateInventory({ where: { id: editingItem.id }, data: values })
      enqueueSnackbar('Item updated successfully', { variant: 'success' })
    } else {
      await createInventory({ data: { ...values, userId: user.id } })
      enqueueSnackbar('Item added successfully', { variant: 'success' })
    }
    setIsModalVisible(false)
    refetch()
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
  }

  const columns = [
    {
      title: 'Item Name',
      dataIndex: 'itemName',
      key: 'itemName',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>
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
      <Title level={2}>Inventory Management</Title>
      <Text>
        Manage your inventory items, track stock levels, and set reorder points.
      </Text>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={24}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAdd}
            style={{ marginBottom: 20 }}
          >
            Add Inventory Item
          </Button>
          {isLoading ? (
            <Alert message="Loading..." type="info" />
          ) : (
            <Table
              dataSource={inventoryData || []}
              columns={columns}
              rowKey="id"
            />
          )}
        </Col>
      </Row>
      <Modal
        title={editingItem ? 'Edit Inventory Item' : 'Add Inventory Item'}
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form
          initialValues={editingItem || { itemName: '', quantity: 0, price: 0 }}
          onFinish={handleModalOk}
        >
          <Form.Item
            name="itemName"
            label="Item Name"
            rules={[{ required: true, message: 'Please input the item name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true, message: 'Please input the quantity!' }]}
          >
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input the price!' }]}
          >
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingItem ? 'Update' : 'Add'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
