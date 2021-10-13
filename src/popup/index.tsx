import React from 'react'
import { List, Avatar } from 'antd';
import './popup.styl'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const header = () => {
  // todo 获取域名
  return <div>header</div>;
}

const footer = () => {
  return <div>footer</div>;
}
const Popup: React.FC = () => {
  
    return (
      <div className="leehyoo-popup">
        <List header={header()}
        footer={footer()}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
      
    )}
  /></div>
    )
}


export default Popup