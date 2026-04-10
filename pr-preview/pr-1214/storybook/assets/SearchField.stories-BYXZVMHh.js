import{r as m,f as l,j as t}from"./iframe-ntYsoI3q.js";import{S as d}from"./SearchField-h2Eup4oU.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D5ZPkd57.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BJHfATlu.js";import"./clsx-B-dksMZM.js";import"./Form-q--S1nBS.js";import"./useFocusRing-D9nk-FO4.js";import"./index-PknmiIVy.js";import"./index-FJM3BeIO.js";import"./Input-klmdQr_w.js";import"./Hidden-BJHd_AQT.js";import"./Button-Czul53LM.js";import"./useLabel-Dq9C3dm5.js";import"./useLabels-xSNV-NpM.js";import"./useButton-BE2eqaFK.js";import"./FieldError-BR-RMZw1.js";import"./Text-DeKUVabC.js";import"./clsx-Ciqy0D92.js";import"./Text-DcoyKAFk.js";import"./RSPContexts-Vvgjzfon.js";import"./Group-CA3PZ7_L.js";import"./useControlledState-DrHB4IJb.js";import"./useLocalizedStringFormatter-hhUVFxwM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B00liPAR.js";import"./useField-BT-2cJTY.js";import"./TextField.module-DdivwlC8.js";import"./search-Ccfznb-y.js";import"./createLucideIcon-DVRKw96B.js";import"./x-DVmtkFru.js";import"./useLocalizedStringFormatter-CkAS-7e9.js";import"./Button-Cjgmk6w1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Tbx6jsXW.js";import"./Collection-DCsSzMBi.js";import"./index-kwkfIc0O.js";import"./DragAndDrop-cmsz7vc7.js";import"./getScrollParent-1fm_mwK8.js";import"./scrollIntoView-DyKyaLk8.js";import"./SelectionIndicator-7xtEuHmh.js";import"./SelectionManager-DlacRCpb.js";import"./useEvent-BZsGlSL3.js";import"./useDescription-FAfc1Eak.js";import"./inertValue-Dqz0zcKC.js";import"./useHighlightSelectionDescription-DuR5S8UK.js";import"./useUpdateEffect-65LEw_qu.js";import"./ListKeyboardDelegate-DEfcmcZu.js";import"./useHasTabbableChild-Bh9mdG4J.js";import"./Checkbox-Br-l0w_w.js";import"./check-wTL4kPo5.js";import"./useToggleState-CtaCqYlS.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
