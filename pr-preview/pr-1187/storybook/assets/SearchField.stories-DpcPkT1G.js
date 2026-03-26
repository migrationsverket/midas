import{r as m,f as l,j as t}from"./iframe-B04rcWcX.js";import{S as d}from"./SearchField-DA5w7Sax.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DViJL_AC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-5SWrrdiI.js";import"./clsx-B-dksMZM.js";import"./Form-CZN0lRlC.js";import"./useFocusRing-DOTrmHAk.js";import"./index-DR4XYI1U.js";import"./index-Co-GRlRp.js";import"./Input-DT608YfG.js";import"./Hidden-CsiOlUYT.js";import"./Button-BsMpdhm5.js";import"./useLabel-CuMqu2Vz.js";import"./useLabels-gSO7jKxM.js";import"./useButton-CqaBofGl.js";import"./FieldError-sVMV4FJK.js";import"./Text-b-jINt27.js";import"./clsx-Ciqy0D92.js";import"./Text-CLa1xROh.js";import"./RSPContexts-vJw7lJG0.js";import"./Group-VGjwpAmn.js";import"./useControlledState-C9VnzheA.js";import"./useLocalizedStringFormatter-D6BZiHkU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Yln5g1nZ.js";import"./useField-M3tSI_SU.js";import"./TextField.module-DdivwlC8.js";import"./search-DoqU7s3o.js";import"./createLucideIcon-VXkpW6uL.js";import"./x-BCKhYY4g.js";import"./useLocalizedStringFormatter-C68HHjER.js";import"./Button-9yaBleaj.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-wR3lvsEV.js";import"./Collection-CrsfpYCF.js";import"./index-CVsQAfIo.js";import"./DragAndDrop-C_qQn3BA.js";import"./getScrollParent-JaIoxddM.js";import"./scrollIntoView-BAmPtIRu.js";import"./SelectionIndicator-WM-tAzaM.js";import"./SelectionManager-DdJ7u2hC.js";import"./useEvent-0NoNGJv_.js";import"./useDescription-CIjr0h8X.js";import"./inertValue-Bvc3UsDU.js";import"./useHighlightSelectionDescription-DQAiFxmr.js";import"./useUpdateEffect-Bd5Lh2iP.js";import"./ListKeyboardDelegate-R7NtbQO_.js";import"./useHasTabbableChild-DAy5U6as.js";import"./Checkbox-4KJNu4aJ.js";import"./check-HCbLmeKq.js";import"./useToggleState-fufmkgO9.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
