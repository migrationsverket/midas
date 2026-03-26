import{r as m,f as l,j as t}from"./iframe-Du56DBQ9.js";import{S as d}from"./SearchField-CPIlngxb.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B5pQKujo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CAvnU5Td.js";import"./clsx-B-dksMZM.js";import"./Form-CXEH7Fev.js";import"./useFocusRing-f_eVeiMs.js";import"./index-CuQRkvKt.js";import"./index-QgZ7VLnC.js";import"./Input-DrE2OjmY.js";import"./Hidden-pui8tPLU.js";import"./Button-Bp_A6Sod.js";import"./useLabel-B6ITnJQY.js";import"./useLabels-BbAQfqg_.js";import"./useButton-BRUJuVat.js";import"./FieldError-OzBsZtu-.js";import"./Text-BILk2R8l.js";import"./clsx-Ciqy0D92.js";import"./Text-Cp0RoVFZ.js";import"./RSPContexts-DOVRjuky.js";import"./Group-Kw1De_li.js";import"./useControlledState-DMDoFiwU.js";import"./useLocalizedStringFormatter-CWz9Ovv4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-hCBROf8B.js";import"./useField-DAQMiV2l.js";import"./TextField.module-DdivwlC8.js";import"./search-BKMmhtHo.js";import"./createLucideIcon-CmFcJ4zx.js";import"./x-Cw-UH40G.js";import"./useLocalizedStringFormatter-B6x4H80B.js";import"./Button-COw5A1XQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DfEAH0ac.js";import"./Collection-4r5BWoqc.js";import"./index-CDeBbL0O.js";import"./DragAndDrop-B9N4i1R-.js";import"./getScrollParent-DL5OVbEN.js";import"./scrollIntoView-Cra0RLpH.js";import"./SelectionIndicator-CbhmTXKy.js";import"./SelectionManager-C_f0uFUG.js";import"./useEvent-X4noRaoO.js";import"./useDescription-Cdh1_1PM.js";import"./inertValue-69hG1B6G.js";import"./useHighlightSelectionDescription-BC1UPA5R.js";import"./useUpdateEffect-Bf3cHjTf.js";import"./ListKeyboardDelegate-CuYYJc4U.js";import"./useHasTabbableChild-Bc_Cjfl_.js";import"./Checkbox-BRudoEfa.js";import"./check-6FgeTpX2.js";import"./useToggleState-CS4BKck6.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
