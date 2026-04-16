import{r as m,f as l,j as t}from"./iframe-BsjwZNBI.js";import{S as d}from"./SearchField-CnQ35D6G.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B2SBtIBh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DYyBIiF3.js";import"./clsx-B-dksMZM.js";import"./Form-BPWLMBhz.js";import"./useFocusRing-C6pIr3Cw.js";import"./index-3FCY3Hw8.js";import"./index-mMukGJMX.js";import"./Input-LN6ra5tV.js";import"./Hidden-B7nyiEix.js";import"./Button-RMvP7Zi7.js";import"./useLabel-zdvU6Gzq.js";import"./useLabels-BUVWty__.js";import"./useButton-IYi6gdVO.js";import"./FieldError-D8jlKqgQ.js";import"./Text-CAl4ECWA.js";import"./clsx-Ciqy0D92.js";import"./Text-lI4j22eJ.js";import"./RSPContexts-DsjC0Jzf.js";import"./Group-CaJ55WRK.js";import"./useControlledState-DSo337QI.js";import"./useLocalizedStringFormatter-uzycqsy8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BqNbAQx5.js";import"./useField-DyZ12IOD.js";import"./TextField.module-DdivwlC8.js";import"./search-CUmd_sHJ.js";import"./createLucideIcon-wuciem56.js";import"./x-DNQ7ZgzB.js";import"./useLocalizedStringFormatter-DjpujwKI.js";import"./Button--2JTIhzL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BLVEBQnn.js";import"./Collection-CgV2ccPo.js";import"./index-BsRC0pIN.js";import"./DragAndDrop-B2UrcYEC.js";import"./getScrollParent-Ciimyvfo.js";import"./scrollIntoView-Dj0SH0aW.js";import"./SelectionIndicator-dCH3KFUc.js";import"./SelectionManager-Cheph0Dh.js";import"./useEvent-Ce5NelAS.js";import"./useDescription-BBYDL9dC.js";import"./inertValue-DcDz5tTx.js";import"./useHighlightSelectionDescription-DQdbX4Sp.js";import"./useUpdateEffect-cquah7Gu.js";import"./ListKeyboardDelegate-C8IRF0A7.js";import"./useHasTabbableChild-CNl5uh8d.js";import"./Checkbox-BaOkEfEo.js";import"./check-DwQiMxk8.js";import"./useToggleState-CkW4Zbxt.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
