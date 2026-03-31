import{r as m,f as l,j as t}from"./iframe-BBhwDnFO.js";import{S as d}from"./SearchField-CCwLgT8O.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C9rn-6Da.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bd87UzLz.js";import"./clsx-B-dksMZM.js";import"./Form-CqRiR74T.js";import"./useFocusRing-B_sqHjIH.js";import"./index-BlvuKTGl.js";import"./index-_W7tIlCY.js";import"./Input-Cp0H90Bq.js";import"./Hidden-QElrSbG6.js";import"./Button-CckDCqMW.js";import"./useLabel-cKvXwArV.js";import"./useLabels-Brd-Ii1p.js";import"./useButton-BBvNlSl7.js";import"./FieldError-CYJ3UXof.js";import"./Text-CuEErEoe.js";import"./clsx-Ciqy0D92.js";import"./Text-DjN1krRx.js";import"./RSPContexts-DMx7X0Ic.js";import"./Group-BlEQrDe0.js";import"./useControlledState-Kegn83S3.js";import"./useLocalizedStringFormatter-BEHHwBjc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DlY1kp4Q.js";import"./useField-awkoEfr0.js";import"./TextField.module-DdivwlC8.js";import"./search-S-dBeNHv.js";import"./createLucideIcon-DfX1ZOng.js";import"./x-CHXjKLnv.js";import"./useLocalizedStringFormatter-xYmRvro2.js";import"./Button-xHV73jzN.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CeBruMUu.js";import"./Collection-C2tsxlnT.js";import"./index-DNxb9PD6.js";import"./DragAndDrop-oF0-Skdk.js";import"./getScrollParent-CyUBos4k.js";import"./scrollIntoView-JBdO06P0.js";import"./SelectionIndicator-B6969qPK.js";import"./SelectionManager-CUTXwG43.js";import"./useEvent-Cdz6o0we.js";import"./useDescription-eBvBmjGe.js";import"./inertValue-D9oDj2bh.js";import"./useHighlightSelectionDescription-DPAUs_cw.js";import"./useUpdateEffect-BAzTcMHH.js";import"./ListKeyboardDelegate-0wBwb-w9.js";import"./useHasTabbableChild-DJhfi4M_.js";import"./Checkbox-Cp1pHjDy.js";import"./check-DrKFvzHI.js";import"./useToggleState-k8n8MC05.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
