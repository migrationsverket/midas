import{r as m,f as l,j as t}from"./iframe-CYdOIShe.js";import{S as d}from"./SearchField-BONQJopb.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cd0s9IXW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-HKmh4Wcn.js";import"./clsx-B-dksMZM.js";import"./Form-Bw9LTkRW.js";import"./useFocusRing-luUELUDI.js";import"./index-nBFb2I9s.js";import"./index-BdtOk31Q.js";import"./Input-BBo9y7oh.js";import"./Hidden-CT5s6T9J.js";import"./Button-CFIgUPn3.js";import"./useLabel-CI9g1Lfo.js";import"./useLabels-CSj9lZg7.js";import"./useButton-CXRipkk8.js";import"./FieldError-DuFysaFf.js";import"./Text-JajiEAQE.js";import"./clsx-Ciqy0D92.js";import"./Text-BPz397x3.js";import"./RSPContexts-C-0mxEQj.js";import"./Group-CTyjmJWp.js";import"./useControlledState-DtqbYXAa.js";import"./useLocalizedStringFormatter-5ECDI-gb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DPDg-aWU.js";import"./useField-D4dGqq1b.js";import"./TextField.module-DdivwlC8.js";import"./search-iZTGHMlA.js";import"./createLucideIcon-cX0zgN2L.js";import"./x-o-bpfQug.js";import"./useLocalizedStringFormatter-NjtY28c2.js";import"./Button-CBUriOkd.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DnXqJuQy.js";import"./Collection-CPviGoO8.js";import"./index-BHTROJYZ.js";import"./DragAndDrop-CZ2nQHm3.js";import"./getScrollParent-BfoeuBWC.js";import"./scrollIntoView-DG71oHLe.js";import"./SelectionIndicator-CfkQq6-V.js";import"./SelectionManager-CuQjp409.js";import"./useEvent-Dw5D7H6E.js";import"./useDescription-B-kG1rWN.js";import"./inertValue-Cf8METBD.js";import"./useHighlightSelectionDescription-CAjRKVk6.js";import"./useUpdateEffect-ld2Yjo1i.js";import"./ListKeyboardDelegate-B9pUPDfX.js";import"./useHasTabbableChild-BVNyGEi1.js";import"./Checkbox-CYj-vfdp.js";import"./check-CUXU-VH3.js";import"./useToggleState-BjwUm2At.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
