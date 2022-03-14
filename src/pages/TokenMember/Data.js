import React ,{useState} from 'react'
import { Table, Radio, Divider, Cascader } from 'antd';
import { MenuItem, Pagination, Select } from '@mui/material';





const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  
  function onChange(value) {
    console.log(value);
  }


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
  ]; // rowSelection object indicates the need for row selection
  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

export const Data = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div>

 {/* <article
              style={{
                width: '150px',
              }}
            >
              <Select
                //   id="RowsSelectLabel"
                //   value={rows}
                //   onChange={handleRows}
                  >
                      <MenuItem value={10}>10개씩 보기</MenuItem>
                      <MenuItem value={20}>20개씩 보기</MenuItem>
                  </Select>
            </article> */}

<Radio.Group
onChange={({ target: { value } }) => {
    setSelectionType(value);}}  value={selectionType}
>

        {/* <Radio value="radio">radio</Radio>
        <Pagination defaultCurrent={50} total={500} />
         */}

{/* <Cascader style={{background: ''}}  options={options} onChange={onChange} placeholder="10개씩 보기" />, */}
    </Radio.Group>
    <Divider />
    <Table style={{width: "1426px"
}}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}
export default Data