import{r as m,f as l,j as t}from"./iframe-D4qwi5aS.js";import{S as d}from"./SearchField-D-cFjekx.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DI6_0GYD.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BpYdNZzj.js";import"./utils-B-Nz338F.js";import"./useLocalizedStringFormatter-BblBLaNa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CGSVZqvT.js";import"./useFocusRing-6dU2HUqL.js";import"./index-BCxIJmj3.js";import"./index-CRmVn8Hv.js";import"./useFormValidation-VS44UaCw.js";import"./useField-CemwzZhq.js";import"./Button-Da-DtFCd.js";import"./Hidden-CM9pZ1fW.js";import"./useLabels-Cj7LPX5i.js";import"./useButton-7Tej6Dr7.js";import"./search-DQFYotEs.js";import"./createLucideIcon-hD68kNPm.js";import"./ClearButton-B7tvEAga.js";import"./Button-BtMm2W3M.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-9LC131sM.js";import"./VisuallyHidden-bcnkwpD1.js";import"./x-CiO824Qj.js";import"./FieldError-COTYRssi.js";import"./Text-0C5O0r7x.js";import"./Text-C5mfap0J.js";import"./RSPContexts-CXXJq7xx.js";import"./Collection-CuVUb6O2.js";import"./index-BSSxLsJ3.js";import"./DragAndDrop-DEv4yuQX.js";import"./getScrollParent-Cwbjb50l.js";import"./scrollIntoView-Dwx5yIaq.js";import"./SelectionIndicator-B1z3YSxs.js";import"./SelectionManager-32JLFw_J.js";import"./useEvent-uU1Q1mcZ.js";import"./useDescription-1CMda98v.js";import"./inertValue-BuxvpND2.js";import"./useHighlightSelectionDescription-C42V9RcH.js";import"./useUpdateEffect-ac2p7zP5.js";import"./ListKeyboardDelegate-D0Gtj1tU.js";import"./useHasTabbableChild-tW7spSQM.js";import"./Checkbox-CbxDz-_L.js";import"./Form-C7dsP6GN.js";import"./check-DLPH1g2y.js";import"./useToggleState-BER363bn.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
