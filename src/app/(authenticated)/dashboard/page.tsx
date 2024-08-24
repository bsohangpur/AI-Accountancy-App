'use client'

import { Typography, Row, Col, Card, Button, List, Spin } from 'antd'
import {
  DollarCircleOutlined,
  StockOutlined,
  BulbOutlined,
  FileAddOutlined,
  BankOutlined,
  BellOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function DashboardPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: financialSummary, isLoading: isLoadingFinancialSummary } =
    Api.financialSummary.findMany.useQuery({})
  const { data: stockLevels, isLoading: isLoadingStockLevels } =
    Api.inventory.findMany.useQuery({})
  const { data: aiInsights, isLoading: isLoadingAiInsights } =
    Api.financialInsights.findMany.useQuery({})
  const { data: recentActivities, isLoading: isLoadingRecentActivities } =
    Api.activityLog.findMany.useQuery({})

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Dashboard</Title>
      <Paragraph>
        Get a quick overview of your financial metrics, stock levels, and
        AI-driven insights.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card
            title="Real-time Financial Summary"
            bordered={false}
            loading={isLoadingFinancialSummary}
          >
            {financialSummary ? (
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Card>
                    <DollarCircleOutlined
                      style={{ fontSize: '24px', color: '#52c41a' }}
                    />
                    <Text>Income: ${financialSummary.income.toString()}</Text>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <DollarCircleOutlined
                      style={{ fontSize: '24px', color: '#f5222d' }}
                    />
                    <Text>
                      Expenses: ${financialSummary.expenses.toString()}
                    </Text>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <DollarCircleOutlined
                      style={{ fontSize: '24px', color: '#1890ff' }}
                    />
                    <Text>
                      Cash Flow: ${financialSummary.cashFlow.toString()}
                    </Text>
                  </Card>
                </Col>
              </Row>
            ) : (
              <Spin />
            )}
          </Card>
        </Col>

        <Col span={24}>
          <Card
            title="Stock Level Overview"
            bordered={false}
            loading={isLoadingStockLevels}
          >
            {stockLevels ? (
              <List
                itemLayout="horizontal"
                dataSource={stockLevels}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <StockOutlined
                          style={{
                            fontSize: '24px',
                            color: item.quantity < 10 ? '#f5222d' : '#52c41a',
                          }}
                        />
                      }
                      title={item.itemName}
                      description={`Quantity: ${item.quantity.toString()}`}
                    />
                  </List.Item>
                )}
              />
            ) : (
              <Spin />
            )}
          </Card>
        </Col>

        <Col span={24}>
          <Card
            title="AI-generated Insights and Recommendations"
            bordered={false}
            loading={isLoadingAiInsights}
          >
            {aiInsights ? (
              <List
                itemLayout="horizontal"
                dataSource={aiInsights}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <BulbOutlined
                          style={{ fontSize: '24px', color: '#faad14' }}
                        />
                      }
                      title={item.insightType}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            ) : (
              <Spin />
            )}
          </Card>
        </Col>

        <Col span={24}>
          <Card title="Quick Links" bordered={false}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Button
                  type="primary"
                  icon={<FileAddOutlined />}
                  onClick={() => router.push('/invoices')}
                >
                  Create Invoice
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  type="primary"
                  icon={<BankOutlined />}
                  onClick={() => router.push('/financial-dashboard')}
                >
                  Reconcile Bank
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={24}>
          <Card
            title="Recent Activity Log"
            bordered={false}
            loading={isLoadingRecentActivities}
          >
            {recentActivities ? (
              <List
                itemLayout="horizontal"
                dataSource={recentActivities}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <BellOutlined
                          style={{ fontSize: '24px', color: '#1890ff' }}
                        />
                      }
                      title={item.activityType}
                      description={dayjs(item.timestamp).format(
                        'YYYY-MM-DD HH:mm:ss',
                      )}
                    />
                  </List.Item>
                )}
              />
            ) : (
              <Spin />
            )}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
