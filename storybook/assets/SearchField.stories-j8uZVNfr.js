import{r as m,f as l,j as t}from"./iframe-BXzs3x0C.js";import{S as d}from"./SearchField-DpFo6gaz.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cyu-XPcZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B7YpdZz-.js";import"./clsx-B-dksMZM.js";import"./Form-BXZvEm0b.js";import"./useFocusRing-DAr84UVu.js";import"./index-CHQe6g0w.js";import"./index-75OxiS6O.js";import"./Input-D0hNwtRc.js";import"./Hidden-HpZioBNJ.js";import"./Button-_6aq1n6B.js";import"./useLabel-D6E2-B37.js";import"./useLabels-w1sKaiJL.js";import"./useButton-CW3P_zOX.js";import"./FieldError-ZWe9d950.js";import"./Text-a0ukmHPT.js";import"./clsx-Ciqy0D92.js";import"./Text-DYh5wK03.js";import"./RSPContexts-CQe6j-NN.js";import"./Group-Ct6065UP.js";import"./useControlledState-DXnq9ftx.js";import"./useLocalizedStringFormatter-D7Rvr_ao.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BV2_ohzC.js";import"./useField-B3Bcv_v3.js";import"./TextField.module-DdivwlC8.js";import"./search-DN7t8c8K.js";import"./createLucideIcon-DAXq1X88.js";import"./x-BmIXIepj.js";import"./useLocalizedStringFormatter-6YC4OkXA.js";import"./Button-Bvp28ihJ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C6-1r25j.js";import"./Collection-CPe6OLkZ.js";import"./index-BK7PRc4P.js";import"./DragAndDrop-DMmSoamv.js";import"./getScrollParent-CeZ4u_Xo.js";import"./scrollIntoView-DmyPyYUI.js";import"./SelectionIndicator-BG5WiYa3.js";import"./SelectionManager-BeubQEj5.js";import"./useEvent-Bna1V34X.js";import"./useDescription-BDCx7FV_.js";import"./inertValue-C4QuZyNL.js";import"./useHighlightSelectionDescription-BUo0JnlK.js";import"./useUpdateEffect-CyCKLu2a.js";import"./ListKeyboardDelegate-C5EkxWNC.js";import"./useHasTabbableChild-C0etAkR_.js";import"./Checkbox-DrV7U7_H.js";import"./check-CDX3eKgG.js";import"./useToggleState-BVvEJoaZ.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
