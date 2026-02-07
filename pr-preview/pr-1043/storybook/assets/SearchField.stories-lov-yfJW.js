import{r as m,f as l,j as t}from"./iframe-CuWNjTRb.js";import{S as d}from"./SearchField-C4hHVfx8.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-iFsC0Of0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-JaG_E2x3.js";import"./utils-bTshPwuy.js";import"./useLocalizedStringFormatter-DE24hlzI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-yeu2J9nc.js";import"./useFocusRing-BOU0QdDc.js";import"./index-BVMh-c2E.js";import"./index-BG9E7EvN.js";import"./useFormValidation-D4Myy34u.js";import"./useField-BQlDoErg.js";import"./Button-DcYqIknv.js";import"./Hidden-CC5A1H5b.js";import"./useLabels-Z2fhjGWT.js";import"./useButton-CheLbNvO.js";import"./search-DLWXaQfY.js";import"./createLucideIcon-CyYJB5cI.js";import"./ClearButton-hr-2EXo7.js";import"./Button-xnDb1Lqn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DDPSUyK3.js";import"./VisuallyHidden-BJty33Lz.js";import"./x-Br7Dc4zV.js";import"./FieldError-DPMeHFzQ.js";import"./Text-YALf1zl3.js";import"./Text-nCheY5Fg.js";import"./RSPContexts-BKEbUSq3.js";import"./Collection-DcW90qW7.js";import"./index-BA03wPss.js";import"./DragAndDrop-C6A23kPv.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BKZlEmjT.js";import"./SelectionManager-D08BgZnb.js";import"./useEvent-MAJC2drM.js";import"./useDescription-BnU31H3h.js";import"./inertValue-Bt7W3oou.js";import"./useHighlightSelectionDescription-nQ8EaeHY.js";import"./useUpdateEffect-DpHPQ8i-.js";import"./ListKeyboardDelegate-2SqsKb6i.js";import"./useHasTabbableChild-Y097T-Or.js";import"./Checkbox-Pt4DIb0C.js";import"./Form-BeXtLCxi.js";import"./check-B3WwXTK5.js";import"./useToggleState-DTKZhdod.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
