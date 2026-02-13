import{r as m,f as l,j as t}from"./iframe-Dw-35drA.js";import{S as d}from"./SearchField-CHh9n7xp.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C2uqa1vf.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BE-LxPbE.js";import"./utils-CUGO82B6.js";import"./useLocalizedStringFormatter-xmiH9SGP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DmlDyehx.js";import"./useFocusRing-BNamEjDv.js";import"./index-CtEHNpSJ.js";import"./index-DiZcibWP.js";import"./useFormValidation-CaQiCpig.js";import"./useField-Dlz_1dv-.js";import"./Button-CIiKNDDC.js";import"./Hidden-4ZD6Ocwe.js";import"./useLabels-_6TVeuod.js";import"./useButton-CerW7b9z.js";import"./search-J4Ews2VT.js";import"./createLucideIcon-Ct15IBRs.js";import"./ClearButton-B-yJ93KA.js";import"./Button-LqRiQ1bb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BExB6Uos.js";import"./VisuallyHidden-iwvGgNVy.js";import"./x-ftsEK93m.js";import"./FieldError-DkHYXYvi.js";import"./Text-CJvMRgPB.js";import"./Text-Cldt2zLV.js";import"./RSPContexts-Bt0JulsM.js";import"./Collection-BMzSXIp9.js";import"./index-BURIGhpV.js";import"./DragAndDrop-BYPqfcvK.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DpxEp-F4.js";import"./SelectionManager-BivSsAi-.js";import"./useEvent-HEqeVpuS.js";import"./useDescription-Dg7Q-zU8.js";import"./inertValue-BjsLjYDf.js";import"./useHighlightSelectionDescription-3xUwtdJp.js";import"./useUpdateEffect-DXRqOBJL.js";import"./ListKeyboardDelegate-CKyiT9tV.js";import"./useHasTabbableChild-BrwekTkg.js";import"./Checkbox-BM3oXEFK.js";import"./Form-B5EuP3qf.js";import"./check-CAE0foHk.js";import"./useToggleState-DLiBXZt9.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
