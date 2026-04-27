import{r as m,f as l,j as t}from"./iframe-Cen0ae1x.js";import{S as d}from"./SearchField-DjrRGqYo.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table--1crZ2Qw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-IBVWRADw.js";import"./clsx-B-dksMZM.js";import"./Form-CjUsSzQO.js";import"./useFocusRing-DL4UMbrb.js";import"./index--9VSKs4e.js";import"./index-CAAqL2lM.js";import"./Input-o46YmxUL.js";import"./Hidden-DeFJbGnS.js";import"./Button-CH2bisSo.js";import"./useLabel-DSnRldp0.js";import"./useLabels-D8TiPXss.js";import"./useButton-SUZhILTb.js";import"./FieldError-BmQ4jQxz.js";import"./Text-DIYKRKOx.js";import"./clsx-Ciqy0D92.js";import"./Text-CTsFsWIz.js";import"./RSPContexts-j8AP2XCE.js";import"./Group-BkN2Ikmz.js";import"./useControlledState-JSkmdR3M.js";import"./useLocalizedStringFormatter-AjdMYjpu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-1F9i-9HA.js";import"./useField-D7rcpCWI.js";import"./TextField.module-DdivwlC8.js";import"./search-Bf4B9uoT.js";import"./createLucideIcon-obLWYbEm.js";import"./x-DckwiAmz.js";import"./useLocalizedStringFormatter-4r_hlzhF.js";import"./Button-CA3EkwoT.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-AN2tdixc.js";import"./Collection-DzYzow1u.js";import"./index-iFhYwZRt.js";import"./DragAndDrop-B87es6X0.js";import"./getScrollParent-N9kF6Mqp.js";import"./scrollIntoView-Dta2NR0L.js";import"./SelectionIndicator-gVFOzTj8.js";import"./SelectionManager-CN3G-fbw.js";import"./useEvent-MaH29R_X.js";import"./useDescription-Co4ko50b.js";import"./inertValue-3TleVCvY.js";import"./useHighlightSelectionDescription-r4tyo3SD.js";import"./useUpdateEffect-C1FHLtjW.js";import"./ListKeyboardDelegate-CR_c2DFA.js";import"./useHasTabbableChild-gw3NtMDV.js";import"./Checkbox-esLs1tBb.js";import"./check-DdTkoQ9F.js";import"./useToggleState-L9nus6cm.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
