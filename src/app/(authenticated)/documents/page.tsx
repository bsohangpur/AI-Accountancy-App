'use client'

import { useState, useEffect } from 'react'
import {
  Typography,
  Upload,
  Button,
  Input,
  List,
  Card,
  Row,
  Col,
  Space,
  Select,
  DatePicker,
  Checkbox,
} from 'antd'
import {
  UploadOutlined,
  FolderOpenOutlined,
  FileSearchOutlined,
  FilePdfOutlined,
  FileExcelOutlined,
  MailOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function DocumentsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [documents, setDocuments] = useState([])
  const [folders, setFolders] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFolder, setSelectedFolder] = useState(null)
  const [reportType, setReportType] = useState('financial')
  const [reportMetrics, setReportMetrics] = useState([])
  const [reportDateRange, setReportDateRange] = useState(null)
  const [scheduleEmail, setScheduleEmail] = useState(false)

  const { data: userDocuments, isLoading: loadingDocuments } =
    Api.document.findMany.useQuery({ where: { userId: user?.id } })
  const { data: userFolders, isLoading: loadingFolders } =
    Api.folder.findMany.useQuery({ where: { userId: user?.id } })
  const { mutateAsync: uploadDocument } = useUploadPublic()
  const { mutateAsync: createDocument } = Api.document.create.useMutation()
  const { mutateAsync: generateReport } = Api.report.generate.useMutation()

  useEffect(() => {
    if (userDocuments) setDocuments(userDocuments)
    if (userFolders) setFolders(userFolders)
  }, [userDocuments, userFolders])

  const handleUpload = async file => {
    try {
      const { url } = await uploadDocument({ file })
      await createDocument({ data: { name: file.name, url, userId: user.id } })
      enqueueSnackbar('Document uploaded successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to upload document', { variant: 'error' })
    }
  }

  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  const handleGenerateReport = async () => {
    try {
      const report = await generateReport({
        type: reportType,
        metrics: reportMetrics,
        dateRange: reportDateRange
          ? [
              dayjs(reportDateRange[0]).toISOString(),
              dayjs(reportDateRange[1]).toISOString(),
            ]
          : undefined,
        scheduleEmail,
      })
      enqueueSnackbar('Report generated successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to generate report', { variant: 'error' })
    }
  }

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Document Management</Title>
      <Paragraph>
        Upload, organize, and search your documents. Generate detailed financial
        and stock reports with AI-driven insights.
      </Paragraph>

      <Space direction="vertical" style={{ width: '100%' }}>
        <Upload
          customRequest={({ file, onSuccess }) => {
            handleUpload(file)
            onSuccess('ok')
          }}
        >
          <Button icon={<UploadOutlined />}>Upload Document</Button>
        </Upload>

        <Input
          placeholder="Search documents..."
          prefix={<FileSearchOutlined />}
          value={searchTerm}
          onChange={handleSearch}
        />

        <Select
          placeholder="Select folder"
          style={{ width: '100%' }}
          onChange={setSelectedFolder}
        >
          {folders.map(folder => (
            <Option key={folder.id} value={folder.id}>
              <FolderOpenOutlined /> {folder.name}
            </Option>
          ))}
        </Select>

        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={filteredDocuments}
          renderItem={item => (
            <List.Item>
              <Card title={item.name}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  View Document
                </a>
              </Card>
            </List.Item>
          )}
        />

        <Title level={3}>Generate Report</Title>
        <Select
          placeholder="Select report type"
          style={{ width: '100%' }}
          onChange={setReportType}
        >
          <Option value="financial">Financial Report</Option>
          <Option value="stock">Stock Report</Option>
        </Select>

        <Select
          mode="multiple"
          placeholder="Select metrics"
          style={{ width: '100%' }}
          onChange={setReportMetrics}
        >
          <Option value="revenue">Revenue</Option>
          <Option value="expenses">Expenses</Option>
          <Option value="profit">Profit</Option>
          <Option value="loss">Loss</Option>
        </Select>

        <DatePicker.RangePicker
          style={{ width: '100%' }}
          onChange={setReportDateRange}
        />

        <Checkbox
          checked={scheduleEmail}
          onChange={e => setScheduleEmail(e.target.checked)}
        >
          Schedule email delivery
        </Checkbox>

        <Button
          type="primary"
          icon={<FilePdfOutlined />}
          onClick={handleGenerateReport}
        >
          Generate Report
        </Button>
      </Space>
    </PageLayout>
  )
}
