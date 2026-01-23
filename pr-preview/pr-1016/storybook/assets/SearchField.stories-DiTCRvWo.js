import{r as m,f as l,j as t}from"./iframe-BAYQ7wPm.js";import{S as d}from"./SearchField-D1RRMiUd.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-0Tc5cMZ-.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BcBrR0N6.js";import"./utils-B8pynThE.js";import"./useLocalizedStringFormatter-Bcu9SfMx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-IrN9QBJc.js";import"./useFocusRing-CL1JgRkg.js";import"./index-BzHN4zRj.js";import"./index-DgHNcNqv.js";import"./useFormValidation-CBGAQwe2.js";import"./useField-C6VONpWL.js";import"./Button-DaxR4XlV.js";import"./Hidden-HP5fIGu5.js";import"./useLabels-DjtSinuU.js";import"./useButton-butUTOni.js";import"./search-57Nvymgh.js";import"./createLucideIcon-BCpEwjBi.js";import"./ClearButton-B6UGZq8H.js";import"./Button-nEHC_YIx.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BkiQvC4b.js";import"./VisuallyHidden-Bku1biRk.js";import"./x-Cnwr1QDl.js";import"./FieldError-CfAJu8nC.js";import"./Text-C4XWfuMR.js";import"./Text-CVc5K2oN.js";import"./RSPContexts-Csbt4o4l.js";import"./Collection-Cm8Ok7h2.js";import"./index-C7oLBNnx.js";import"./DragAndDrop-DwojZh-0.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-kj3v0dd8.js";import"./SelectionManager-T1TTTMx9.js";import"./useEvent-BhF9SPwq.js";import"./useDescription-Bv0l7l0W.js";import"./inertValue-5FCWtcPR.js";import"./useHighlightSelectionDescription-BS-0zqxT.js";import"./useUpdateEffect-UwBqhA_h.js";import"./ListKeyboardDelegate-DI8WxP8c.js";import"./useHasTabbableChild-BGiQ3w9Q.js";import"./Checkbox-JCeSn4--.js";import"./Form-1EAQwkMT.js";import"./check-CFIFo5Zz.js";import"./useToggleState-BOR5P64J.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
