import{r as m,f as l,j as t}from"./iframe-D1quRbgW.js";import{S as d}from"./SearchField-DVwW1efi.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DvD2HARe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-5jbBDEho.js";import"./clsx-B-dksMZM.js";import"./Form-CYOiDrvK.js";import"./useFocusRing-9kJRwLWf.js";import"./index-C1wTVLbv.js";import"./index-w4IFX-ob.js";import"./Input-D6BpUq6c.js";import"./Hidden-CE_f7fkS.js";import"./Button-BhbL5JV7.js";import"./useLabel-DDdOINwl.js";import"./useLabels-BsTHS2Oy.js";import"./useButton-D9N6BOnF.js";import"./FieldError-tCCfgJxh.js";import"./Text-3Qvoq1in.js";import"./clsx-Ciqy0D92.js";import"./Text-D_OKwN2L.js";import"./RSPContexts-BOAQgN9e.js";import"./Group-BYE11aio.js";import"./useControlledState-DeZ6Yvot.js";import"./useLocalizedStringFormatter-JzAhjm-n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-vt5FCW9J.js";import"./useField-Cufj8K7g.js";import"./TextField.module-DdivwlC8.js";import"./search-CIgwiHOl.js";import"./createLucideIcon-xiP51FEZ.js";import"./x-C6gJ_9jG.js";import"./useLocalizedStringFormatter-BjC_IaMj.js";import"./Button-BfQ6mpwy.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BTPkzFD2.js";import"./Collection-D07AIaI6.js";import"./index-DVsa0PpW.js";import"./DragAndDrop-D83qtKKN.js";import"./getScrollParent-BuLIPRgk.js";import"./scrollIntoView-Bo7c4HRy.js";import"./SelectionIndicator-BQcve-Om.js";import"./SelectionManager-BfK7m5GQ.js";import"./useEvent-l8liJTej.js";import"./useDescription-CYq7ZcY8.js";import"./inertValue-CG9XGZkV.js";import"./useHighlightSelectionDescription-CnbCm_ld.js";import"./useUpdateEffect-DfrNQfxH.js";import"./ListKeyboardDelegate-abc3RMeL.js";import"./useHasTabbableChild-DNcO0Xj2.js";import"./Checkbox-cytQzq2b.js";import"./check-GvY84bn_.js";import"./useToggleState-Hc7uiKPK.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
