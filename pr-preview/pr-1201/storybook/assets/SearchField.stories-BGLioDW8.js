import{r as m,f as l,j as t}from"./iframe-KvMX5Axs.js";import{S as d}from"./SearchField-DDrLo9yw.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DA5q1w0y.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DQB0ixZT.js";import"./clsx-B-dksMZM.js";import"./Form-DU3OszFC.js";import"./useFocusRing-vgvsKIAr.js";import"./index-DTZE8lUv.js";import"./index-Y9HTW2-l.js";import"./Input-S3TQ-i_W.js";import"./Hidden-DgM1V2hb.js";import"./Button-Bo3Qklea.js";import"./useLabel-0b57TDxq.js";import"./useLabels-CR00I-nd.js";import"./useButton-DgCOwdob.js";import"./FieldError-Dm-mWSrI.js";import"./Text-BvSzNFUh.js";import"./clsx-Ciqy0D92.js";import"./Text-xieIOj6u.js";import"./RSPContexts-C0J0N8cH.js";import"./Group-D54bSnbM.js";import"./useControlledState-CT69c7wx.js";import"./useLocalizedStringFormatter-BUFrwSMc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D3gJUay8.js";import"./useField-B9fS3fRz.js";import"./TextField.module-DdivwlC8.js";import"./search-Bp02gyGE.js";import"./createLucideIcon-CKpEkAd-.js";import"./x-BXrTPOwi.js";import"./useLocalizedStringFormatter-NesSIbJ3.js";import"./Button-C1NVLp98.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BX39qD-v.js";import"./Collection-CuE_5Y0n.js";import"./index-Cd_h8BU-.js";import"./DragAndDrop-jPwgnAZ6.js";import"./getScrollParent-BQUmQnum.js";import"./scrollIntoView-B4l7yvba.js";import"./SelectionIndicator-CnqLajoz.js";import"./SelectionManager-BkEXNsjd.js";import"./useEvent-CIdla-e8.js";import"./useDescription-BxZn0zUe.js";import"./inertValue-DNnSK77J.js";import"./useHighlightSelectionDescription-D5uHPu0Z.js";import"./useUpdateEffect-DX-y8wr4.js";import"./ListKeyboardDelegate-CeGxABxM.js";import"./useHasTabbableChild-BUMt6Iah.js";import"./Checkbox-61cckj5q.js";import"./check-_d3XSU8_.js";import"./useToggleState-CvtEa4-l.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
