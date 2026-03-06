import{r as m,f as l,j as t}from"./iframe-CgL5jpdX.js";import{S as d}from"./SearchField-BU20jCoN.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DQw5Msik.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CyaCWJoJ.js";import"./utils-BwYOvAb8.js";import"./useLocalizedStringFormatter-sPHgE0bP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B45MsQB8.js";import"./useFocusRing-CzWgPPi5.js";import"./index-IcQzFznC.js";import"./index-BLmwPxgC.js";import"./useFormValidation-YoD1TmSM.js";import"./useField-BsmAT2vs.js";import"./Button-Z-LnhU8E.js";import"./Hidden-C2oIje6j.js";import"./useLabels-B9veE0Tg.js";import"./useButton-CzcDwR1N.js";import"./search-DiGKRQ9U.js";import"./createLucideIcon-CxmWxSan.js";import"./ClearButton-mM8CX3Tr.js";import"./Button-DSLJU119.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-D5fFi2pk.js";import"./VisuallyHidden-BsEPRBBE.js";import"./x-Cp-TOvNz.js";import"./FieldError-BH_BPKHD.js";import"./Text-C7o90fsQ.js";import"./Text-MhlqGevy.js";import"./RSPContexts-TxIrKy65.js";import"./Collection-9AeLgQUg.js";import"./index-CO57A9Dx.js";import"./DragAndDrop-PVYep0tz.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DqnlVpg0.js";import"./SelectionManager-o0XZ8hoX.js";import"./useEvent-DWxTDEgS.js";import"./useDescription-B8kyRAqY.js";import"./inertValue-CoqdM-Tm.js";import"./useHighlightSelectionDescription-D6lrBM8W.js";import"./useUpdateEffect-cJInICqi.js";import"./ListKeyboardDelegate-BZdKy9GG.js";import"./useHasTabbableChild-BpIJ54WT.js";import"./Checkbox-B6sG3j2A.js";import"./Form-CeL7g4an.js";import"./check-BaESR95y.js";import"./useToggleState-B2e4_1YM.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
