import{r as m,f as l,j as t}from"./iframe-CmYiK-n6.js";import{S as d}from"./SearchField-CCOrfZ9L.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CWLqlrHg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DuGECbYJ.js";import"./clsx-B-dksMZM.js";import"./Form-b_mzsJNr.js";import"./useFocusRing-fb67MZCG.js";import"./index-uTF0zBZg.js";import"./index-3su9nmIU.js";import"./Input-DZg1c3XK.js";import"./Hidden-DYp0pP8Z.js";import"./Button-qoG5XtEP.js";import"./useLabel-DORwbiEm.js";import"./useLabels-CWIg4FvW.js";import"./useButton-DI4TpKGO.js";import"./FieldError-BH0tEXew.js";import"./Text-BjHkHRHl.js";import"./clsx-Ciqy0D92.js";import"./Text-Do0OahUX.js";import"./RSPContexts-CLCgQCox.js";import"./Group-DrusCoa1.js";import"./useControlledState-CmhxWbu6.js";import"./useLocalizedStringFormatter-DtH6xDXs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DER5hTj5.js";import"./useField-BPzngyvH.js";import"./TextField.module-DdivwlC8.js";import"./search-CJBRb31b.js";import"./createLucideIcon-tBOZLxvE.js";import"./x-BVGBl3EY.js";import"./useLocalizedStringFormatter-Bg3jxnyj.js";import"./Button-CF9FU3kY.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-3nqwjOvK.js";import"./Collection-BKbSWMGW.js";import"./index-CEYCKRCR.js";import"./DragAndDrop-CxJ6leIs.js";import"./getScrollParent-CGgBb0lV.js";import"./scrollIntoView-BEc6bXLo.js";import"./SelectionIndicator-DAOEJSSR.js";import"./SelectionManager-C5mi1PZ6.js";import"./useEvent-DiUqwjRb.js";import"./useDescription-D-5y-MeU.js";import"./inertValue-ZG1SGxYh.js";import"./useHighlightSelectionDescription-C4OLLgzM.js";import"./useUpdateEffect-Cvboz-A5.js";import"./ListKeyboardDelegate-B1h2DZXt.js";import"./useHasTabbableChild-BDNAYQrO.js";import"./Checkbox-aBlFfK7w.js";import"./check-CUY1Q-BZ.js";import"./useToggleState-DOErwd6q.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
