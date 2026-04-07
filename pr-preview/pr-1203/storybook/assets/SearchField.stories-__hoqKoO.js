import{r as m,f as l,j as t}from"./iframe-dJ9N4Hwo.js";import{S as d}from"./SearchField-BlJvZX5u.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-FX4HmVdP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D-XK7wRt.js";import"./clsx-B-dksMZM.js";import"./Form-9N9RpmGN.js";import"./useFocusRing-DNc8UdyY.js";import"./index--Ro6Hv8b.js";import"./index-CtGu0Onf.js";import"./Input-DwtYIoW3.js";import"./Hidden-DOBdyTg3.js";import"./Button-BbXYBFSI.js";import"./useLabel-Bu1777AN.js";import"./useLabels-CNniH7Tl.js";import"./useButton-3Dpu7dn4.js";import"./FieldError-WztJl-_N.js";import"./Text-BxsbjcMl.js";import"./clsx-Ciqy0D92.js";import"./Text-CrKOi2mC.js";import"./RSPContexts-QX7zRPGs.js";import"./Group-BKGxwm6x.js";import"./useControlledState-BVn3AEak.js";import"./useLocalizedStringFormatter-B71vqv89.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DE_ZPmCe.js";import"./useField-CiFrPq-j.js";import"./TextField.module-DdivwlC8.js";import"./search-CmSrI-TN.js";import"./createLucideIcon-B0IDBM20.js";import"./x-D6CWGX1J.js";import"./useLocalizedStringFormatter-Br0ol2So.js";import"./Button-Cxxx7spL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dxq67aJu.js";import"./Collection-ChvYxMRy.js";import"./index-CU_ebUvQ.js";import"./DragAndDrop-BEdRfHjW.js";import"./getScrollParent-C8aqS4T5.js";import"./scrollIntoView-jXOV1euP.js";import"./SelectionIndicator-C7XYESn_.js";import"./SelectionManager-BgU6jwm0.js";import"./useEvent-CyTGIsHa.js";import"./useDescription-B46QsQBZ.js";import"./inertValue-eysOHik0.js";import"./useHighlightSelectionDescription-DzvlOhaN.js";import"./useUpdateEffect-0lZN7t9J.js";import"./ListKeyboardDelegate-DdJwbMfh.js";import"./useHasTabbableChild-C8GIeeuK.js";import"./Checkbox-BCmUGYtS.js";import"./check-Cc3sPl4G.js";import"./useToggleState-CEqziUPl.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
