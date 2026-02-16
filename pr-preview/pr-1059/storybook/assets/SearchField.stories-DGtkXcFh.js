import{r as m,f as l,j as t}from"./iframe-CnLjYyDe.js";import{S as d}from"./SearchField-j6qZFWTN.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CLHKlu01.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CDg9gtZR.js";import"./utils-PY6vNW2t.js";import"./useLocalizedStringFormatter-DncuCv5i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CgFbw68i.js";import"./useFocusRing-C1Kccm1N.js";import"./index-BZe8XCs4.js";import"./index-Bwgl-PlP.js";import"./useFormValidation-06JlsHvr.js";import"./useField-tmII_gfS.js";import"./Button-CDIxZDro.js";import"./Hidden-CeVZqhsZ.js";import"./useLabels-BGVam2Lm.js";import"./useButton-BI5y_GVj.js";import"./search-DHqeSZch.js";import"./createLucideIcon-CEFUCq1N.js";import"./ClearButton-Dr41Si7P.js";import"./Button-BssF-2IR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C41SEwV4.js";import"./VisuallyHidden-DsHhkbAP.js";import"./x-BHy0cb0H.js";import"./FieldError-Dse4I99A.js";import"./Text-lxQvVvph.js";import"./Text-fnyNn8_R.js";import"./RSPContexts-D780ii40.js";import"./Collection-Bwov6hkO.js";import"./index-B8bUntZI.js";import"./DragAndDrop-UY39b7N-.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B38C2YlB.js";import"./SelectionManager-DEpk9IGH.js";import"./useEvent-YRvbwzIz.js";import"./useDescription-Bvw6I-Tk.js";import"./inertValue-BYDLYf-K.js";import"./useHighlightSelectionDescription-gIXHUB5J.js";import"./useUpdateEffect-D-nyIDVn.js";import"./ListKeyboardDelegate-BMhvgd6_.js";import"./useHasTabbableChild-Y0jcimDj.js";import"./Checkbox-DBTaZ3Aa.js";import"./Form-BAHMXRIr.js";import"./check-BenD5apO.js";import"./useToggleState-BrYnlr1r.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
