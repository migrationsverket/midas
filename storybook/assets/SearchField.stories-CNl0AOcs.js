import{r as m,f as l,j as t}from"./iframe-Bj3rykqq.js";import{S as d}from"./SearchField-CxHRfGAr.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BxdlpE6S.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-RfhzWKsJ.js";import"./utils-BPR6QYXC.js";import"./useLocalizedStringFormatter-B6y89RBX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BEFy2JUH.js";import"./useFocusRing-C7uadSDO.js";import"./index-Cayhktc8.js";import"./index-CnCGQqbA.js";import"./useFormValidation-CYMzGIyK.js";import"./useField-BMzGe7LS.js";import"./Button-BY6aKs9R.js";import"./Hidden-H2J0AFM4.js";import"./useLabels-C9jhOE8d.js";import"./useButton-5QuuU98A.js";import"./search-BSuYJ33Z.js";import"./createLucideIcon-CZGOASFZ.js";import"./ClearButton-DfU0Ltw2.js";import"./x-BjCQEpYP.js";import"./Button-DJUV-Oif.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B96CwRWL.js";import"./VisuallyHidden-DZrJwb84.js";import"./FieldError-CGmgGZmu.js";import"./Text-D5Hv1XGK.js";import"./Text-DPxIPb0k.js";import"./RSPContexts-Cy2kM2_o.js";import"./Collection-Cj9-B7W9.js";import"./index-BC12g_-D.js";import"./DragAndDrop-B35E8_OU.js";import"./getScrollParent-B0dYpp2l.js";import"./scrollIntoView-GIX096WN.js";import"./SelectionIndicator-DW_78Rrm.js";import"./SelectionManager-BkdSTgS9.js";import"./useEvent-Z7oo2rlc.js";import"./useDescription-DOgLYOne.js";import"./inertValue-gmpYmLvu.js";import"./useHighlightSelectionDescription-D5T-M7LZ.js";import"./useUpdateEffect-Di_zLKx0.js";import"./ListKeyboardDelegate-CIZwYtIR.js";import"./useHasTabbableChild-BdlPlGAq.js";import"./Checkbox-Dhwmk9Ee.js";import"./Form-Dizw0pBP.js";import"./check-EsYXMsMj.js";import"./useToggleState-CaoOixly.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
