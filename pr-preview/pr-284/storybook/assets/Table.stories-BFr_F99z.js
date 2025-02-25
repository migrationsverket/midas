import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{T as a,a as p,C as c,$ as u,R as y,b}from"./Table-BgI12jv4.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Byufbxkw.js";import"./useFocusable-DvoOiisW.js";import"./clsx-B-dksMZM.js";import"./Hidden-CwCDq9YD.js";import"./index-i7ZvCR4f.js";import"./RSPContexts-CeCCo7XS.js";import"./Collection-ChKcjgL2.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./SelectionManager-CzRPRDMi.js";import"./useEvent-CA0YFu_S.js";import"./FocusScope-BEpvNgc1.js";import"./context-DFhOKXSg.js";import"./useDescription-Ct3UQeSC.js";import"./useControlledState-DGyHFLi9.js";import"./VisuallyHidden-DXoeczHE.js";import"./ListKeyboardDelegate-D7ImecD0.js";import"./useHighlightSelectionDescription-qrTcz71W.js";import"./useLocalizedStringFormatter-m925tTwS.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-CFpHdRS1.js";import"./useGridSelectionCheckbox-CDAQ2PRs.js";import"./Checkbox-CEuvkKUO.js";import"./Form-Co3XUpyT.js";import"./Text-EJwwmz-7.js";import"./useField-BolKm6uG.js";import"./useLabels-CtxEn0bM.js";import"./createLucideIcon-8wDOqnHv.js";const U={component:a,title:"Components/Table",tags:["autodocs"]},o={args:{},render:({...s})=>{const t=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],l=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}];return e.jsxs(a,{"aria-label":"Files",selectionMode:"multiple",...s,children:[e.jsx(p,{columns:t,children:n=>e.jsx(c,{isRowHeader:n.isRowHeader,children:n.name})}),e.jsx(u,{items:l,children:n=>e.jsx(y,{columns:t,children:d=>e.jsx(b,{children:n[d.id]})})})]})}};var r,m,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => {
    const columns = [{
      name: 'Name',
      id: 'name',
      isRowHeader: true
    }, {
      name: 'Type',
      id: 'type'
    }, {
      name: 'Date Modified',
      id: 'date'
    }] satisfies Column[];
    const rows = [{
      id: 1,
      name: 'Games',
      date: '6/7/2020',
      type: 'File folder'
    }, {
      id: 2,
      name: 'Program Files',
      date: '4/7/2021',
      type: 'File folder'
    }, {
      id: 3,
      name: 'bootmgr',
      date: '11/20/2010',
      type: 'System file'
    }, {
      id: 4,
      name: 'log.txt',
      date: '1/18/2016',
      type: 'Text Document'
    }] satisfies Row[];
    return <Table aria-label='Files' selectionMode='multiple' {...args}>
        <TableHeader columns={columns}>
          {column => <Column isRowHeader={column.isRowHeader}>{column.name}</Column>}
        </TableHeader>
        <TableBody items={rows}>
          {item => <Row columns={columns}>
              {column => <Cell>{item[column.id]}</Cell>}
            </Row>}
        </TableBody>
      </Table>;
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const V=["Primary"];export{o as Primary,V as __namedExportsOrder,U as default};
