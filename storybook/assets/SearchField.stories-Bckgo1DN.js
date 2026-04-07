import{r as m,f as l,j as t}from"./iframe-CuFHe2Vf.js";import{S as d}from"./SearchField-Cw2Rr-p_.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-ZEIvqOUP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-VBjVty-c.js";import"./clsx-B-dksMZM.js";import"./Form-ChRtTK9l.js";import"./useFocusRing-B1hdhdHY.js";import"./index-XnHTh2k6.js";import"./index-6uxo6Atk.js";import"./Input-B0HfqjCP.js";import"./Hidden-Bu9Ft7CN.js";import"./Button-VKTXL-zI.js";import"./useLabel-BWPwXwHm.js";import"./useLabels-DvXUCZzH.js";import"./useButton-CH05P1-e.js";import"./FieldError-BD8ZbGLc.js";import"./Text-BF1VogWM.js";import"./clsx-Ciqy0D92.js";import"./Text-C4mdW1tH.js";import"./RSPContexts-S1NEbTgr.js";import"./Group-BZfJMEwC.js";import"./useControlledState-JP9W3MVB.js";import"./useLocalizedStringFormatter-DOfPa_xp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-jEbRxP4U.js";import"./useField-Lr6V8Ghf.js";import"./TextField.module-DdivwlC8.js";import"./search-D4dC0wtq.js";import"./createLucideIcon-C4YuFSR4.js";import"./x-Dr_a8wCQ.js";import"./useLocalizedStringFormatter-CZd5T7mu.js";import"./Button-CksL_-0o.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CygALObj.js";import"./Collection-XlbfREs0.js";import"./index-BM5YCedE.js";import"./DragAndDrop-D5Mg7xoQ.js";import"./getScrollParent-BI7k-3ko.js";import"./scrollIntoView-C3vI_X5p.js";import"./SelectionIndicator-DlvZtmB1.js";import"./SelectionManager-B0ydga7k.js";import"./useEvent-D-TzDIei.js";import"./useDescription-BeysD_em.js";import"./inertValue-Cs9dqxZ-.js";import"./useHighlightSelectionDescription-C_yv10ZQ.js";import"./useUpdateEffect-BiGUulod.js";import"./ListKeyboardDelegate-BLaavUV6.js";import"./useHasTabbableChild-d3HCqVD7.js";import"./Checkbox-CJIRIXHM.js";import"./check-Bb9O8MYP.js";import"./useToggleState-Vdiz7wu5.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
