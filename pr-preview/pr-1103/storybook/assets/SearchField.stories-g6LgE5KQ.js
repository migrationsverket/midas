import{r as m,f as l,j as t}from"./iframe-DZFoTsAP.js";import{S as d}from"./SearchField-Cu6siGY2.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DcHcuTzc.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DdgMtiiZ.js";import"./utils-BgDH_W4s.js";import"./useLocalizedStringFormatter-DXt9zP7M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Wf556nwc.js";import"./useFocusRing-BOfY4fHs.js";import"./index-C0QzEn7-.js";import"./index-qTuN-RN1.js";import"./useFormValidation--RUuo-EK.js";import"./useField-Dc6XDZOx.js";import"./Button-DXuM91n-.js";import"./Hidden-CfeWKfQs.js";import"./useLabels-5V9A1z8O.js";import"./useButton-DlimN8Sl.js";import"./search-DSMnq5sZ.js";import"./createLucideIcon-D8OPAh1o.js";import"./ClearButton-0cMA_SoF.js";import"./x-CLiDVpMP.js";import"./Button-DrMZqG88.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BFv7ZkAg.js";import"./VisuallyHidden-CsEimcih.js";import"./FieldError-CDqVsYjk.js";import"./Text-CDyd3dUQ.js";import"./Text-BTLpICHy.js";import"./RSPContexts-BEm_mhkG.js";import"./Collection-D92hNAQF.js";import"./index-JR0-rleW.js";import"./DragAndDrop-Da2wOtu8.js";import"./getScrollParent-CVqyyLK3.js";import"./scrollIntoView-BWZteTWd.js";import"./SelectionIndicator-D0pzxM3X.js";import"./SelectionManager-BkDv12c8.js";import"./useEvent-BV0hRtep.js";import"./useDescription-DUddkFIG.js";import"./inertValue-5lF4rBDk.js";import"./useHighlightSelectionDescription-DfWnfhWg.js";import"./useUpdateEffect-Sx7VtMiP.js";import"./ListKeyboardDelegate-C20pHG0c.js";import"./useHasTabbableChild-MW0aUxt0.js";import"./Checkbox-MU9ii1Os.js";import"./Form-CPx_ibCo.js";import"./check-BjK6xXCf.js";import"./useToggleState-DfUKPW7y.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
