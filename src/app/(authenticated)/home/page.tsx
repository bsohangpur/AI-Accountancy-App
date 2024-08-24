'use client'

import { Typography, Row, Col, Card, List, Button } from 'antd'
import {
  MessageOutlined,
  NotificationOutlined,
  DollarOutlined,
  FileAddOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: userData,
    isLoading,
    refetch,
  } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: { chats: true, financialInsights: true },
  })

  if (isLoading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Welcome to Your Dashboard</Title>
      <Text>
        Quickly see key metrics and insights, stay updated with your team's
        communications, and navigate the app efficiently.
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col xs={24} md={12}>
          <Card title="Financial Insights" bordered={false}>
            <List
              itemLayout="horizontal"
              dataSource={userData?.financialInsights}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={item.insightType}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title="Recent Chats"
            bordered={false}
            icon={<MessageOutlined />}
          >
            <List
              itemLayout="horizontal"
              dataSource={userData?.chats}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={dayjs(item.timestamp).format('YYYY-MM-DD HH:mm')}
                    description={item.message}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col xs={24} md={8}>
          <Button
            type="primary"
            icon={<FileAddOutlined />}
            onClick={() => handleNavigation('/invoices')}
          >
            Create Invoice
          </Button>
        </Col>
        <Col xs={24} md={8}>
          <Button
            type="primary"
            icon={<DollarOutlined />}
            onClick={() => handleNavigation('/expenses')}
          >
            Track Expenses
          </Button>
        </Col>
        <Col xs={24} md={8}>
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            onClick={() => handleNavigation('/inventory')}
          >
            Manage Inventory
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}
