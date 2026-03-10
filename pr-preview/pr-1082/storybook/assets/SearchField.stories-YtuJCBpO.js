import{r as m,f as l,j as t}from"./iframe-CsxWE5EL.js";import{S as d}from"./SearchField-sb6AD0vY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CIJ86K1Q.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-57nrhz75.js";import"./utils-P0665-nd.js";import"./useLocalizedStringFormatter-Z1dagDOh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B_U5cObQ.js";import"./useFocusRing-Dx7Mqj5I.js";import"./index-BAsiWoUz.js";import"./index-DKO6MG4x.js";import"./useFormValidation-CrcNBzjy.js";import"./useField-qgzZoiS2.js";import"./Button-CDY69ujX.js";import"./Hidden-BqRB_zEB.js";import"./useLabels-h1mkGsRa.js";import"./useButton-BpMa8VN4.js";import"./search-CWYIZdXs.js";import"./createLucideIcon-CCm7dT8n.js";import"./ClearButton-B4yph5cE.js";import"./Button-yd2G3ZOl.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-P5TE6vXt.js";import"./VisuallyHidden-nLPm3Kol.js";import"./x-4V_XJgsU.js";import"./FieldError-A-GMFzj3.js";import"./Text-DUbIGWON.js";import"./Text-3LyazC5v.js";import"./RSPContexts-DOv8Dn-z.js";import"./Collection-QyDzYr0n.js";import"./index-CNoJbepi.js";import"./DragAndDrop-BX_6xNBF.js";import"./getScrollParent-pI-jvfbG.js";import"./scrollIntoView-MA0b_M3P.js";import"./SelectionIndicator-D79xjCK7.js";import"./SelectionManager-7GG-2FbB.js";import"./useEvent-Dd6OJrln.js";import"./useDescription-52SWgKDA.js";import"./inertValue-BkJV2tbe.js";import"./useHighlightSelectionDescription-DzyqceGw.js";import"./useUpdateEffect-CeVUs30C.js";import"./ListKeyboardDelegate-D9S_djJW.js";import"./useHasTabbableChild-tu5PguGf.js";import"./Checkbox-C4eHxgJ-.js";import"./Form-BDEr0D_A.js";import"./check-CTo0t4yo.js";import"./useToggleState-CVRUc1NF.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
