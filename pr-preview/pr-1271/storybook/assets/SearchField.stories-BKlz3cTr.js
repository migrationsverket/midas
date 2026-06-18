import{r as m,f as l,j as t}from"./iframe-CZzQp4L4.js";import{S as d}from"./SearchField-DXdKXJEC.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B5hFruys.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BTk1BXS6.js";import"./clsx-B-dksMZM.js";import"./Form-659gi0gy.js";import"./useFocusRing-BmXcpeVt.js";import"./index-D0_fmTu-.js";import"./index-pEVaM4yo.js";import"./Input-DFxiIJ3V.js";import"./Hidden-BsPoJuN8.js";import"./Button-CMuMpLTA.js";import"./useLabel-BPb7Du1x.js";import"./useLabels-BJus4Fnm.js";import"./useButton-BjqkzqIi.js";import"./FieldError-B2NzjSdH.js";import"./Text-D4nq5ZrE.js";import"./clsx-Ciqy0D92.js";import"./Text-CgRiWgOz.js";import"./RSPContexts-C0f-FQan.js";import"./Group-A-mQcfpV.js";import"./useControlledState-Bzqk2M-v.js";import"./useLocalizedStringFormatter-vXM2-Zab.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BlQ66k1M.js";import"./useField-C2MfHxqd.js";import"./TextField.module-DdivwlC8.js";import"./search-D3dPv408.js";import"./createLucideIcon-Cp1wTSwb.js";import"./x-BkS9uTgk.js";import"./useLocalizedStringFormatter-DHizypL-.js";import"./Button-fUmHoMv6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-aeJx5n8b.js";import"./Collection-8ZnFVCkO.js";import"./index-IxhRrh31.js";import"./DragAndDrop-kAEwq-6r.js";import"./getScrollParent-D5Oq2B6G.js";import"./scrollIntoView-C5X5vw03.js";import"./SelectionIndicator-FgeZ0UGL.js";import"./SelectionManager-CzxGmGcX.js";import"./useEvent-BLtqzDzs.js";import"./useDescription-CsoYkjOr.js";import"./inertValue-CeLdCNvO.js";import"./useHighlightSelectionDescription-DCGRWXbE.js";import"./useUpdateEffect-DAQ4myEp.js";import"./ListKeyboardDelegate-DiVo4jo3.js";import"./useHasTabbableChild-Bw4gH6Hq.js";import"./Checkbox-BaX22mtO.js";import"./check-uaHuxoY8.js";import"./useToggleState-Dbu77dnE.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
