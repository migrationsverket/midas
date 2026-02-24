import{r as m,f as l,j as t}from"./iframe-DTgf2yWr.js";import{S as d}from"./SearchField-BcmQlau5.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DFrZ_-Oo.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-SjDZU1Af.js";import"./utils-DzwNYuTN.js";import"./useLocalizedStringFormatter-DNR4J-Wr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ca-oLaHa.js";import"./useFocusRing-CP7gcATu.js";import"./index-vkqPEYc_.js";import"./index-BH-DXcRM.js";import"./useFormValidation-Bjsb6Uuq.js";import"./useField-CIGO5Ju_.js";import"./Button-DsiJh3rg.js";import"./Hidden-CB9dI_i8.js";import"./useLabels-BOW8HuY_.js";import"./useButton-C1yhLz7X.js";import"./search-CyNLyhSI.js";import"./createLucideIcon-D9vwcDME.js";import"./ClearButton-D33j2E5z.js";import"./Button-ni8lscHZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BDsobOj3.js";import"./VisuallyHidden-DLhSHTT7.js";import"./x-Dr1VccyY.js";import"./FieldError-D0N2b3Uz.js";import"./Text-bWE3sRjS.js";import"./Text-BnRqnZ91.js";import"./RSPContexts-B_H1Uz4-.js";import"./Collection-C0O46JBs.js";import"./index-BLfu4a51.js";import"./DragAndDrop-QgNBJUHK.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CcmcrDmB.js";import"./SelectionManager-xfeP_COB.js";import"./useEvent-DuxHD3US.js";import"./useDescription-Bv7lMAxy.js";import"./inertValue-Cr-g2clw.js";import"./useHighlightSelectionDescription-BjUWVWtL.js";import"./useUpdateEffect-D9am1KDI.js";import"./ListKeyboardDelegate-bR_oZAxF.js";import"./useHasTabbableChild-C5GtmKLs.js";import"./Checkbox-CuietWnt.js";import"./Form-CxvCqnnD.js";import"./check-CrMqV6Km.js";import"./useToggleState-BQJdJFEO.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
