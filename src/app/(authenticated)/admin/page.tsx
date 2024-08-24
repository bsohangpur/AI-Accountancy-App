'use client'

import { Prisma } from '@prisma/client'
import { useState, useEffect } from 'react'
import {
  Typography,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Space,
  Popconfirm,
  Row,
  Col,
  Card,
} from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function UserManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: users,
    isLoading,
    refetch,
  } = Api.user.findMany.useQuery({ include: { roles: true } })
  const { mutateAsync: createUser } = Api.user.create.useMutation()
  const { mutateAsync: updateUser } = Api.user.update.useMutation()
  const { mutateAsync: deleteUser } = Api.user.delete.useMutation()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingUser, setEditingUser] =
    useState<Prisma.UserGetPayload<{ include: { roles: true } }>>()
  const [form] = Form.useForm()

  const showModal = (
    user?: Prisma.UserGetPayload<{ include: { roles: true } }>,
  ) => {
    setEditingUser(user)
    form.setFieldsValue(user || {})
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setEditingUser(undefined)
    form.resetFields()
  }

  const handleSave = async (values: Prisma.UserCreateInput) => {
    try {
      if (editingUser) {
        await updateUser({ where: { id: editingUser.id }, data: values })
        enqueueSnackbar('User updated successfully', { variant: 'success' })
      } else {
        await createUser({ data: values })
        enqueueSnackbar('User created successfully', { variant: 'success' })
      }
      refetch()
      handleCancel()
    } catch (error) {
      enqueueSnackbar('Failed to save user', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteUser({ where: { id } })
      enqueueSnackbar('User deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete user', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Roles',
      dataIndex: 'roles',
      key: 'roles',
      render: (roles: { name: string }[]) =>
        roles.map(role => role.name).join(', '),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (
        text: any,
        record: Prisma.UserGetPayload<{ include: { roles: true } }>,
      ) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => showModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Card>
            <Title level={2}>User Management</Title>
            <Text>Manage user roles, permissions, and access levels.</Text>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => showModal()}
              style={{ marginBottom: 16 }}
            >
              Add User
            </Button>
            <Table
              columns={columns}
              dataSource={users}
              loading={isLoading}
              rowKey="id"
            />
          </Card>
        </Col>
      </Row>

      <Modal
        title={editingUser ? 'Edit User' : 'Add User'}
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input the name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please input the email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="roles"
            label="Roles"
            rules={[{ required: true, message: 'Please select the roles!' }]}
          >
            <Select mode="multiple" placeholder="Select roles">
              {/* Assuming roles are predefined, you can replace this with dynamic data */}
              <Option value="admin">Admin</Option>
              <Option value="user">User</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
