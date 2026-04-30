import{r as m,f as l,j as t}from"./iframe-Ex-KEKbR.js";import{S as d}from"./SearchField-B54kR5_P.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C5SM1ppy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dq_8TIe4.js";import"./clsx-B-dksMZM.js";import"./Form-CXAt5UpX.js";import"./useFocusRing-H-1VYNNS.js";import"./index-DADZxfgg.js";import"./index-DTNdKqrN.js";import"./Input-CN9bHUmc.js";import"./Hidden-CyDaCMoS.js";import"./Button-C8JSYTF8.js";import"./useLabel-iQaKdHKt.js";import"./useLabels-PlDzf5VQ.js";import"./useButton-It03dpfb.js";import"./FieldError-CgmLooUG.js";import"./Text-CeEAoIdH.js";import"./clsx-Ciqy0D92.js";import"./Text-DJaiOuNK.js";import"./RSPContexts-DxlwqgCa.js";import"./Group-uGzZW66D.js";import"./useControlledState-OUr4VazD.js";import"./useLocalizedStringFormatter-C1SYv3sl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BU2Zn2Z3.js";import"./useField-BOXq6rqV.js";import"./TextField.module-DdivwlC8.js";import"./search-DsTHWAni.js";import"./createLucideIcon-CnalT5R6.js";import"./x-D_4t1M2T.js";import"./useLocalizedStringFormatter-CTOyl-7s.js";import"./Button-BAZVnFvD.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B1UrQI4k.js";import"./Collection-Bge0dQHT.js";import"./index-CJUwhwxK.js";import"./DragAndDrop-DxdtYTWg.js";import"./getScrollParent-ClgoPRH9.js";import"./scrollIntoView-D4kGYOib.js";import"./SelectionIndicator-DgoNvaWX.js";import"./SelectionManager-XXgR8HaZ.js";import"./useEvent-B4t1a7CS.js";import"./useDescription-Bk4LSLU-.js";import"./inertValue-DhjvNcjY.js";import"./useHighlightSelectionDescription-BXdY1Lya.js";import"./useUpdateEffect-1FylvW6V.js";import"./ListKeyboardDelegate-Bg6ymlV0.js";import"./useHasTabbableChild-D9jdibTW.js";import"./Checkbox-CiVn6ige.js";import"./check-DuCLopxg.js";import"./useToggleState-DGdgrcBh.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
