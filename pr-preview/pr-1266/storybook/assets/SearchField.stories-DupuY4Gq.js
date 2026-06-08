import{r as m,f as l,j as t}from"./iframe-C8RsNfgP.js";import{S as d}from"./SearchField-DHu7YQlz.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C4rD-_iV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CoNQ4mwz.js";import"./clsx-B-dksMZM.js";import"./Form-_BW7u1yO.js";import"./useFocusRing-Cez6wS5f.js";import"./index-D8K4fX28.js";import"./index-Di6EYout.js";import"./Input-BIxzzi3V.js";import"./Hidden-BIvUufzC.js";import"./Button-A6crx_HM.js";import"./useLabel-DX_Dt9l7.js";import"./useLabels-IRIn0Uy0.js";import"./useButton-CHMv5Y4_.js";import"./FieldError-Dx0wLbZk.js";import"./Text-COO1Tk0x.js";import"./clsx-Ciqy0D92.js";import"./Text-C2A-yzmp.js";import"./RSPContexts-DnHOF8LL.js";import"./Group-DXZilGFj.js";import"./useControlledState-LFxBnaBs.js";import"./useLocalizedStringFormatter-6GffOhcG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BIRklZ0Y.js";import"./useField-CTSoVGUk.js";import"./TextField.module-DdivwlC8.js";import"./search-Dgwbti-H.js";import"./createLucideIcon-BIQyFJ8n.js";import"./x-D8ZbVwK0.js";import"./useLocalizedStringFormatter-CdlaUYB9.js";import"./Button-Cfe9iLIu.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D7WZRGTo.js";import"./Collection-B6ieSp3r.js";import"./index-Db_2pBFe.js";import"./DragAndDrop-C2lgAauG.js";import"./getScrollParent-DXaGcTkj.js";import"./scrollIntoView-D2l_qE3A.js";import"./SelectionIndicator-CXMu-wz6.js";import"./SelectionManager-CBA1K6Fq.js";import"./useEvent-Bt-5AhA-.js";import"./useDescription-CbZGxods.js";import"./inertValue-DIqsqZBb.js";import"./useHighlightSelectionDescription-BwdT4M9m.js";import"./useUpdateEffect-BtHyaZ9z.js";import"./ListKeyboardDelegate-B2GotOUx.js";import"./useHasTabbableChild-DooEG5WD.js";import"./Checkbox-7LsmJBQS.js";import"./check-ZFOexXGg.js";import"./useToggleState-C_LJMjGl.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
