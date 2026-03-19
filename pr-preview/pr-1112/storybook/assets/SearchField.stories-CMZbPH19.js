import{r as m,f as l,j as t}from"./iframe-DS0O0j7b.js";import{S as d}from"./SearchField-DWFo7Kw7.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cd2ELgTX.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-YiR0L17D.js";import"./utils-C_Y1VJyB.js";import"./useLocalizedStringFormatter-DgIs-M2f.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CfmO-j_f.js";import"./useFocusRing-C0d3_IpO.js";import"./index-D3Tr-KQh.js";import"./index-oPvKfDWU.js";import"./useFormValidation-BQZAIrPT.js";import"./useField-BQuOWwRW.js";import"./Button-Dmgtf1bQ.js";import"./Hidden-kaUfFbEZ.js";import"./useLabels-CDMzy8g3.js";import"./useButton-8RAVO9uW.js";import"./search-Dk_uKGHj.js";import"./createLucideIcon-BttQnoLZ.js";import"./ClearButton-DLZaUM2-.js";import"./x-DcON_b5s.js";import"./Button-DB7_h4Ph.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C9AMm5n0.js";import"./VisuallyHidden-bAykpqel.js";import"./FieldError-obiFspMo.js";import"./Text-24RRIPeu.js";import"./Text-img0UXBQ.js";import"./RSPContexts-xBE5IiKT.js";import"./Collection-CHi4IpgR.js";import"./index-D5ydEaOw.js";import"./DragAndDrop-B-d23YrX.js";import"./getScrollParent-DZsWhqqY.js";import"./scrollIntoView-BMpUAOeO.js";import"./SelectionIndicator-D5gv17Ml.js";import"./SelectionManager-Ch-PpRgv.js";import"./useEvent-D-WGugyX.js";import"./useDescription-BRpvpR9v.js";import"./inertValue-BXHjsU7J.js";import"./useHighlightSelectionDescription-Bn3hVoDd.js";import"./useUpdateEffect-Bx1r3pao.js";import"./ListKeyboardDelegate-DTV_dm1Z.js";import"./useHasTabbableChild-zUK0SYqE.js";import"./Checkbox-DCOL-Elt.js";import"./Form-C58mAzIV.js";import"./check-q1SZxOQZ.js";import"./useToggleState-Bl4UD8T5.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
