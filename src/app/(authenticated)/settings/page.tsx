'use client'

import { Prisma } from '@prisma/client'
import {
  Typography,
  Form,
  Input,
  Button,
  Select,
  Switch,
  Row,
  Col,
  Divider,
} from 'antd'
import {
  UserOutlined,
  SettingOutlined,
  NotificationOutlined,
  ApiOutlined,
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

export default function SettingsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: userData,
    isLoading: userLoading,
    refetch: refetchUser,
  } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: {
      chats: true,
      documents: true,
      inventorys: true,
      invoices: true,
      expenses: true,
      bankReconciliations: true,
      financialInsights: true,
    },
  })

  const { mutateAsync: updateUser } = Api.user.update.useMutation()

  const handleUpdateUser = async (values: Partial<Prisma.UserUpdateInput>) => {
    try {
      await updateUser({ where: { id: user?.id }, data: values })
      enqueueSnackbar('User updated successfully', { variant: 'success' })
      refetchUser()
    } catch (error) {
      enqueueSnackbar('Failed to update user', { variant: 'error' })
    }
  }

  if (userLoading) return <PageLayout layout="narrow">Loading...</PageLayout>

  return (
    <PageLayout layout="narrow">
      <Title level={2}>System Settings</Title>
      <Text>
        Configure system settings, including integrations, notification
        preferences, and AI configurations. Users can also manage personal
        settings such as account details and themes.
      </Text>
      <Divider />
      <Form
        layout="vertical"
        onFinish={handleUpdateUser}
        initialValues={userData}
      >
        <Title level={3}>
          <UserOutlined /> User Account Settings
        </Title>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Name" name="name">
              <Input placeholder="Enter your name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Email" name="email">
              <Input placeholder="Enter your email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Language" name="language">
              <Select placeholder="Select language">
                <Option value="en">English</Option>
                <Option value="es">Spanish</Option>
                <Option value="fr">French</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Theme" name="theme">
              <Select placeholder="Select theme">
                <Option value="light">Light</Option>
                <Option value="dark">Dark</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Title level={3}>
          <NotificationOutlined /> Notification Preferences
        </Title>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Email Notifications"
              name="emailNotifications"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="SMS Notifications"
              name="smsNotifications"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Title level={3}>
          <ApiOutlined /> Integrations
        </Title>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Payment Gateway" name="paymentGateway">
              <Input placeholder="Enter payment gateway details" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Bank Integration" name="bankIntegration">
              <Input placeholder="Enter bank integration details" />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Title level={3}>
          <SettingOutlined /> AI Configurations
        </Title>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="AI Model" name="aiModel">
              <Input placeholder="Enter AI model details" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="AI Settings" name="aiSettings">
              <Input placeholder="Enter AI settings" />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Title level={3}>
          <SettingOutlined /> System-wide Settings
        </Title>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Tax Rates" name="taxRates">
              <Input placeholder="Enter tax rates" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Currency" name="currency">
              <Select placeholder="Select currency">
                <Option value="USD">USD</Option>
                <Option value="EUR">EUR</Option>
                <Option value="GBP">GBP</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Settings
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
