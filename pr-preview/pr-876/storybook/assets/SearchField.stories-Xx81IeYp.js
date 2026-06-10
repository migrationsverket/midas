import{r as m,f as l,j as t}from"./iframe-CmeF7aiR.js";import{S as d}from"./SearchField-DlkXBibZ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BajwiEft.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Z3-XoPsz.js";import"./clsx-B-dksMZM.js";import"./Form-DCycYtMR.js";import"./useFocusRing-2QXJrqIt.js";import"./index-XXiSS7gB.js";import"./index-Cy7R6ehB.js";import"./Input-DoDFk9Wd.js";import"./Hidden-BUn3MpC7.js";import"./Button-ClEeAqn6.js";import"./useLabel-ZOG9CKkE.js";import"./useLabels-kUwjKE83.js";import"./useButton-B02vL_2_.js";import"./FieldError-BVrE0AIG.js";import"./Text-C9HAfj-8.js";import"./clsx-Ciqy0D92.js";import"./Text-BssmR8ms.js";import"./RSPContexts-BpcZ6nht.js";import"./Group-BQ2QLkRq.js";import"./useControlledState-hzD7JFD-.js";import"./useLocalizedStringFormatter-CWAX1pT5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D_L8tPLl.js";import"./useField-DvTMSr8p.js";import"./TextField.module-DdivwlC8.js";import"./search-zrnM1zLI.js";import"./createLucideIcon-DCW1PR-F.js";import"./x-B7wEz93I.js";import"./useLocalizedStringFormatter-ACOccWph.js";import"./Button-xoJ9JlM1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B0_5kTh6.js";import"./Collection-Cw5azGBR.js";import"./index-Ctx5ZgNK.js";import"./DragAndDrop-Bxp8Fnss.js";import"./getScrollParent-BlOOdjy0.js";import"./scrollIntoView-rNYRejP1.js";import"./SelectionIndicator-BC7L7-ox.js";import"./SelectionManager-N_jg7Ktj.js";import"./useEvent-kH6-sJDb.js";import"./useDescription-DEWpOLKq.js";import"./inertValue-Dt4PZthJ.js";import"./useHighlightSelectionDescription-_9AHy2nk.js";import"./useUpdateEffect-zrhW07hQ.js";import"./ListKeyboardDelegate-C9ktpFr7.js";import"./useHasTabbableChild-DE9jO-yG.js";import"./Checkbox-0X5AXbN7.js";import"./check-BEQo7_-U.js";import"./useToggleState-DNIuJBzp.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
